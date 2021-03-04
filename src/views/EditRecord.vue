<template>
    <div class="edit">
        <header class="header">
            <button class="back" @click="back">
                <Icon name="left"/>
            </button>
            <div class="tag">
                <div class="icon">
                    <Icon :name="record.tag.name" />
                </div>
                <span>{{record.tag.value}}</span>
            </div>
            <div class="back"></div>
        </header>

        <main>
            <ul class="main">
                <li>
                    <label>
                        <span class="name">类型</span>
                        <div class="type">{{record.type === '-' ? '支出':'收入'}}</div>
                    </label>
                </li>
                <li>
                    <label>
                        <span class="name">金额</span>
                        <input type="text" v-model="record.amount">
                    </label>
                </li>
                <li>
                    <label class="date">
                        <span class="name">日期</span>
                        <DatePicker :initial-date="dayjs(record.createAt).toISOString()" @update:year="updateYear"
                                    @update:month="updateMonth" @update:date="updateDate"/>
                    </label>
                </li>
                <li>
                    <label>
                        <span class="name">备注</span>
                        <input type="text" v-model="record.note" placeholder="写点备注呀~">
                    </label>
                </li>
            </ul>
        </main>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import DatePicker from '@/components/DatePicker.vue';

@Component({
    components:{Icon,DatePicker}
})
    export default class EditRecord extends Vue {
        record?: RecordItem;    //函数定义的方式，不是对象的定义；
        dayjs=dayjs;

        created() {
         this.$store.commit('findRecord',parseInt(this.$route.params.id));
         this.record=clone<RecordItem>(this.$store.state.currentRecord);
         if(!this.record){   //这一步防止拿不到当前页面数据
             this.record={
                 id:0,
                 tag:{name:"food",value:'饮食'},
                 type:'-',
                 note:'',
                 amount:0,
                 createAt:new Date()
             };
             this.$router.replace('/error');    //TODO
         }   
        }

        updateYear(year: number){
            if(this.record){
                this.record.createAt=dayjs(this.record.createAt).year(year).toDate();
            }
        }

        updateMonth(month: number){
            if(this.record){
                this.record.createAt=dayjs(this.record.createAt).month(month - 1).toDate();
                }
            }
        
        updateDate(date: number) {
            if (this.record) {
                this.record.createAt = dayjs(this.record.createAt).date(date).toDate();
            }
        }

        back(){
            this.$router.replace('/')
        }

        ok(){
            if(this.record){
                this.record.amount=parseFloat(this.record.amount.toString());
                this.$store.commit('updateRecord',{id:this.record.id,record:this.record})
            }
            this.$router.replace('/')
        }

        remove(){
            if(this.record){
                this.$store.commit('removeReocrd',this.record.id);
                if(this.$store.state.recordListErroe==='notfound'){
                        window.alert('该记录不存在');
                }else{
                    this.$router.replace('/')
                }
            }
        }

    }

    
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.edit {
        position: relative;
        height: 100vh;
    }
    .header {
        background: $color-background;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 16px;
        color:white;
        .back {
            width: 32px;
            height: 32px;
            color:white;
            svg {
                width: 24px;
                height: 24px;
            }
        }
        .tag {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            .icon {
                background: #f5f5f5;
                padding: 8px;
                border-radius: 50%;
                margin-bottom: 8px;
                color:$color-highlight;
                svg {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }
    .main {
        font-size: 16px;
        > li {
            padding: 12px 0px 12px 16px;
            border-bottom: 1px solid #dddddd;
            > label {
                display: flex;
                align-items: center;
                .name {
                    color: #999999;
                    margin-right: 16px;
                }
                .type {
                    height: 40px;
                    display: flex;
                    align-items: center;
                }
                input {
                    flex-grow: 1;
                    height: 40px;
                    border: none;
                    font-size: inherit;
                }
            }
        }
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #dddddd;
        padding: 0 16px;
        button {
            width: 50%;
            font-size: 14px;
            padding: 4px 0;
            margin: 12px 0;
            &:first-child {
                border-right: 1px solid #dddddd;
            }
            &:last-child {
                color: #b84e52;
            }
        }
    }
</style>