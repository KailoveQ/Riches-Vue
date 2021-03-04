<template>
  <Layout>
    <header class="header">
      <div class="logo">
        <img :src="logo" alt="富贵记账" />
      </div>

      <div class="info">
        <div class="calendar">
          <div class="slideYear">
            <select v-model="year" class="year">
              <option v-for="y in years" :key="y" :value="y">{{y}}年</option>
            </select>
          </div>
          <div class="month">
            <select v-model="month" >
              <option v-for="m in 12" :key="m" :value="m">{{beautifyMonth(m)}}</option>
            </select>
            <span>月</span>
          </div>
        </div>

        <div class="total">
          <div>
            <div class="label">收入</div>
            <div class="value">
              <span>{{this.totalIncome.toString().split('.')[0] || 0}}</span>.{{this.totalIncome.toString().split('.')[1]
            || '00'}}
            </div>
          </div>
          <div>
            <div class="label">支出</div>
            <div class="value">
              <span>{{this.totalExpense.toString().split('.')[0] || 0}}</span>.{{this.totalExpense.toString().split('.')[1]
            || '00'}}
            </div>
          </div>

        </div>

      </div>
    </header>

    <ul v-if="groupList.length>0" class="record">
      <li v-for="(group,index) in groupList" :key="index">
        <div class="title">
          <span>{{getTitle(group)}}</span>
          <span>{{getTotal(group)}}</span>
        </div>
        <div class="items">
          <router-link class="item" v-for="(item,index) in group.items" :key="index" :to="`/record/edit/${item.id}`">
            <div class="tag">
              <Icon :name="item.tag.name" class="icon" />
              <span>{{item.tag.value}}</span>
            </div>
            <span>{{getAmount(item)}}</span>
          </router-link>
        </div>
      </li>

    </ul>

    <div v-else class="reverse">
      <Blank />
    </div>

  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import clone from '@/lib/clone';
import dayjs from 'dayjs';
import Blank from '@/components/Blank.vue';
import logo from '@/assets/logo.png'

type Group={
  name: string;
  items: RecordItem[];
}
@Component({
  components:{Layout,Icon,Blank}
})
export default class Labels extends Vue {

  logo: string=logo;
  year= window.localStorage.getItem('year') || dayjs().year().toString();
  month=window.localStorage.getItem('month') || (dayjs().month() + 1).toString();

  get years(){   //自己封装一个日期选择器；
    const endYear=dayjs().year();
    let y=1970;
    const result: number[]=[];
    while(y<=endYear){
      result.unshift(y)
      y++;
    }
    return result;
  }

  get recordList(): RecordItem[]{   //获取vuex的state必须使用计算属性，而ts中的计算属性使用get属性；
    return this.$store.state.recordList;
  }

  get groupList(){
    const result: Group[]=[];
    const names: string[]=[];

    //进行排序；
    const sortedRecordList = clone<RecordItem[]>(this.recordList).filter(item => (dayjs(item.createAt).year() === parseInt(this.year)) && (dayjs(item.createAt).month() + 1 === parseInt(this.month))).sort((b, a) => {
      return dayjs(a.createAt).valueOf() - dayjs(b.createAt).valueOf();
    });

    let record: RecordItem;

    for (record of sortedRecordList) {
      let date: string;
      if (this.year === dayjs().year().toString()) {
        // 今年的数据按天分组
        date = dayjs(record.createAt).toISOString().split('T')[0];
      } else {
        // 以前的数据按月分组
        date = dayjs(record.createAt).format('YYYY-MM');
      }
      const index = names.indexOf(date);
      if (index < 0) {
        names.push(date);
        result.push({name: date, items: [record]});
      } else {
        result[index].items.push(record);
      }
    }

    return result;
  }

  get totalIncome(){
    let total =0;
    let group: Group;
    for(group of this.groupList){
      let record: RecordItem;
      for(record of group.items){
        if(record.type==='+'){
          total+=record.amount;
        }
      }
    }

    return total;
  }

  get totalExpense(){
    let total =0;
    let group: Group;
    for(group of this.groupList){
      let record: RecordItem;
      for(record of group.items){
        if(record.type==='-'){
          total+=record.amount;
        }
      }
    }

    return total;
  }

  beautifyMonth(m: number){
    return m<10?'0'+m.toString():m.toString();
  }

  toWeekday(value: number){
    if(value>=0&&value<=6){
      return[
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ][value]
    }
  }

  getTitle(group: Group) {
    const day = dayjs(group.name);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return `今天 ${this.toWeekday(day.day())}`;
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return `昨天 ${this.toWeekday(day.day())}`;
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return `前天 ${this.toWeekday(day.day())}`;
    } else if (day.isSame(now, 'year')) {
      return `${day.format('M月D日')} ${this.toWeekday(day.day())}`;
    } else {
      return `${day.format('YYYY年M月')}`;
    }
  }


  getTotal(group: Group) {
    let total = 0;
    let foo: string
    foo = '123';
    let item: RecordItem;
    for (item of group.items) {
      if (item.type === '-') {
        total -= (item.amount);
        foo=total.toFixed(2);
        total=Number(foo)


      } else if (item.type === '+') {
        total += (item.amount) ;
        foo=total.toFixed(2);
        total=Number(foo)
      }
    }
    if (total <= 0) {
      return `支出: ¥${Math.abs(total)}`;
    } else {
      return `收入: ¥${Math.abs(total)}`;
    }
  }

  getAmount(record: RecordItem){
    if(record.type==='+'){
      return record.amount;
    }else{
      return -record.amount;
    }
  }


  @Watch('year')
  saveYear(year: string) {
    window.localStorage.setItem('year', year);
  }
  @Watch('month')
  saveMonth(month: string) {
    window.localStorage.setItem('month', month);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.header {
  background: $color-background;
  color: $color-font;
  .logo {
    img {
      position:relative;
      top:12px;
      height: 36px;
      margin-bottom:6px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    padding: 4px 0;
    .label {
      font-size: 10px;
      color: #d4d2d2;
      margin-bottom: 4px;
      padding: 1px;
    }
    .value {
      span {
        font-size: 20px;
      }
      font-size: 12px;
    }
    .calendar {
      position: relative;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .year {
        font-size: 12px;
        color:$color-font;
        padding: 0 3px;
        margin-bottom: 5px;
      }


      .month {
        font-size: 12px;
        padding: 0 3px;
        display: flex;
        align-items: center;
        select {
          font-size: 16px;
          color: $color-font;
        }
      }
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 30px;
        background: $color-font;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    .total {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      padding: 4px 16px;
    }
  }
}
.record {
  > li {
    .title {
      font-size: 12px;
      color: $color-background;
      display: flex;
      justify-content: space-between;
      padding: 4px 16px;
      border-bottom: 1px solid #dddddd;
    }
    .items {
      display: flex;
      flex-direction: column;
      padding: 12px 16px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        box-shadow: inset 0 -0.5px 0.5px -0.5px rgba(0, 0, 0, 0.2);
        .tag {
          display: flex;
          align-items: center;
          .icon {
            background: $color-background;
            width: 30px;
            height: 30px;
            padding: 4px;
            border-radius: 50%;
            margin-right: 16px;
            color:white;
          }
        }
      }
    }
  }
}
.reverse {
  margin-top: 20vh;
}

</style>