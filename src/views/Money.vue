<template>
  <div class="money">
    <Types></Types>

  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
@Component({
  components: {Types}
})
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>
.money{
  border: 1px solid red;
}
</style>