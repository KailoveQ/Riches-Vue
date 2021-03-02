<template>
  <div>我是tags,vue
    <router-link to="/labels">返回首页</router-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {

}
</script>

<style lang="scss" scoped>

</style>