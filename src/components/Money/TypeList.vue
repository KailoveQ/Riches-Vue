<template>
  <div class="typeList">
    <div class="current">
      <ul>
        <li><icon name="餐饮"/>餐饮</li>
        <li><icon name="购物"/>购物</li>
        <li><icon name="居住"/>居住</li>
        <li><icon name="交通"/>交通</li>
        <li><icon name="娱乐"/>娱乐</li>
        <li><icon name="医疗"/>医疗</li>
        <li><icon name="游戏"/>游戏</li>
        <li><icon name="添加"/>添加</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class TypeList extends Vue {

}
</script>

<style lang="scss" scoped>
.current {
  display: flex;
  
  padding: 6px 12px;
  box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.3);
  border: 1px solid red;
  > ul{
    border: 1px solid red;
  }
}

</style>