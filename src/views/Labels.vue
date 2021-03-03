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

</style>