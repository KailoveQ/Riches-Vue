<template>
<div class="nav">
  <router-link to="/money">明细</router-link>
  |
  <router-link to="/labels">记账</router-link>
  |
  <router-link to="/statistics">图标</router-link>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>
.nav{
  border: 2px solid palegreen;
}
</style>