<template>
<layout>
      <header class="header">
        <div class="logo">
          <img :src="logo" alt="贝迹记账" />
        </div>

        <div class="info">
          2021年3月
          </div>

          <div class="total">
            <div>
              <div class="label">收入</div>
              <div class="value">
                <span>0</span>.00
              </div>
            </div>
            <div>
              <div class="label">支出</div>
              <div class="value">
                <span>0</span>.00
              </div>
            </div>

          </div>

      </header>

      <ul  class="record">
        <li>
          <div class="title">
            <span>A</span>
            <span>B</span>
          </div>
          <div class="items">
            <router-link class="item" to="/labellist">
              <div class="tag">
                <Icon name="money" class="icon" />
                <span>购物</span>
              </div>
              <span>我是备注</span>
            </router-link>
          </div>
        </li>

      </ul>


</layout>


</template>

<script lang="ts">

import Vue from 'vue';

import {Component} from 'vue-property-decorator';
@Component
export default class Labels extends Vue {

}
</script>

<style lang="scss" scoped>

.header {
  background: #9563f1;
  .logo {
    img {
      position:relative;
      top:10px;
      height: 30px;
      margin-bottom:-10px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    padding: 4px 0;
    .label {
      font-size: 14px;
      color: white;
      margin-bottom: 4px;
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
        color:#c7c6c3;
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
        }
      }
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 30px;
        background: #333333;
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
      color: #999999;
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
            background: #b08fee;
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