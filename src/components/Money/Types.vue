<template>
  <ul class="types">
    <li :class=" type ==='-' && 'selected' " @click="selectType('-')">支出</li>
    <li :class=" type ==='+' && 'selected' " @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  props:{
    msg:String
  }
})
export default class Types extends Vue {
  type = '-'; //-表示支出，'加表示收入'
  helloMsg= 'hello'+this.msg;
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<!--<script lang="js">-->
<!--  export default {-->
<!--    name: 'Types',-->
<!--    data(){-->
<!--      return{-->
<!--        type:'-'//-表示支出，'加表示收入'-->
<!--      }-->
<!--    },-->
<!--    methods:{-->
<!--      selectType(type){-->
<!--        if (type !== '-' &&type !=='+'){-->
<!--          throw new Error('type is unknown')-->
<!--        }-->
<!--        this.type= type-->
<!--      }-->
<!--    }-->
<!--  };-->
<!--</script>-->

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