<template>
<div>
  <p>404老铁！啥也没有，检查路径对不对</p>
  <div>
    <router-link to="/money">返回首页</router-link>
  </div>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class NotFound extends Vue {

}
</script>

<style lang="scss" scoped>

</style>