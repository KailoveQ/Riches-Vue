<template>
  <div>
    <ul class="types">
      <li class="selected z" >支出</li>
      <li class="z">收入</li>
      <li><router-link to="/labels" class="close">取消</router-link></li>
    </ul>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .types {
    background: $yellow;
    display: flex;
    text-align: center;
    font-size: 20px;
    justify-content: center;
    > li {
      padding: 24px 16px 8px 16px;
      height: 59px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #333;
      }
    }
  }

</style>