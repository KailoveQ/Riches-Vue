<template>
  <div class="money">
    <div class="types">
         <Types></Types>
         <button class="cancel" @click="cancle">取消</button>
    </div>
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
  cancle(){
    this.$router.replace('/labels')
  }
}
</script>

<style lang="scss" scoped>
types{
  background:#9563f1;
  display:flex;
  justify-content: center;
  position: relative;
  .cancel{
    position: absolute;
    top:40%;
    right:0;
    transform: translateY(-50%);
    font-size: 16px;
    padding: 24px 14px 8px 16px;
    color:white;
  }
}
</style>