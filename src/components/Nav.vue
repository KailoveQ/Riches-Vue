<template>
<nav>


  <router-link to="/labels" class="item" active-class="selected">
    <icon name="labels"/>标签
  </router-link>

  <router-link to="/money" class="item" active-class="selected">
    <icon name="money"/>记账
  </router-link>

  <router-link to="/statistics" class="item" active-class="selected">
    <icon name="statistics"/>统计
  </router-link>



</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Nav extends Vue {

}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  padding: 4px 24px;
  justify-content: space-between;
  > .item {
    //width: 33.33333%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 24px;
      height: 24px;
    }
  }
  > .item.selected{
    color: $color-highlight;
  }
}


</style>