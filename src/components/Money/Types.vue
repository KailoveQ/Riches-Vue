<template>
  <ul class="types" :class="{[classPrefix+'-tab-bar']:classPrefix}" >
    <li class="types-item" :class="{[classPrefix+'-tab-bar-item']:classPrefix,'selected':cBar===bar.value}"
        v-for="(bar,index) in bars" :key="index" @click="toggle(bar.value)"
    >
      {{bar.name}}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) classPrefix?: string;
  @Prop({required: true,type: Array}) bars!: TabBarItem[];
  @Prop({required: true,type: String}) cBar!: string;
  toggle(barValue: string){
    this.$emit('update:cBar',barValue)
  }
}
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