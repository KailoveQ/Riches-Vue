<template>
  <div class="money">
    <div class="types">
         <Types></Types>
         <button class="cancel" @click="cancle">取消</button>
    </div>
    <TypeList></TypeList>
    <div>
      <NumberPad></NumberPad>

    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
import TypeList from '@/components/Money/TypeList.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

@Component({
  components: {NumberPad, TypeList, Types}
})
export default class Money extends Vue {
  cancle(){
    this.$router.replace('/labels')
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types{
  background:$color-background;
  display:flex;
  justify-content: center;
  position: relative;

  ::v-deep .types-tab-bar-item {
    padding: 24px 16px 8px 16px;
  }

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