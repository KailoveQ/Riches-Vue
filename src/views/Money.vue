<template>
  <div class="money">
    <div class="types">
         <Types class-prefix="types" ></Types>
         <button class="cancel" @click="cancle">取消</button>
    </div>
    <TypeList  class-prefix="money" class="tag-list"></TypeList>
    <Notes class-prefix="money"></Notes>
    <NumberPad/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
import TypeList from '@/components/Money/TypeList.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';

@Component({
  components: {Notes, NumberPad, TypeList, Types}
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
.money{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tag-list{
    padding-bottom: 12px;
    flex-grow: 1;
    overflow: auto;
  }
}

::v-deep {
  .money-nodes {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vh;
    border: 1px solid red;
  }
}
</style>