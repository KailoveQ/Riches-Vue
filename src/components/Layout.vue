<template>
  <div class="nav-wrapper">
    <div class="content">
    <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Layout extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}
</style>