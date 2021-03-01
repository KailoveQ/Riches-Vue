<template>
    <ul class="types">
      <li class="selected" >支出</li>
      <li >收入</li>
    </ul>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .types {
    background: $color-background;
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
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 4px;
        background: #f5f5f5;
      }
    }
  }

</style>