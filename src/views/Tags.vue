<template>
  <div>
    <h2>我是tags,vue</h2>
    <router-link to="/money"><h3>取消</h3></router-link>
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