<template>
  <div class="numberPad" :class="classPrefix && `${classPrefix}-calculator`">
    <label class="note">
      {{value}}
      <div class="icon">
        <Icon name='note' />
      </div>
      <span>备注:</span>
      <input type="text" placeholder="写一点备注呀~"  v-model="value">
    </label>

    <div class="panel">{{output}}</div>
    <div class="number-pad">
      <button v-for="(name,index) in buttonList" :key="index" :class="name==='ok' && 'ok'" @click="inputConent">{{name}}</button>

      <button  @click="remove">
        <Icon name='delete'/>
      </button>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components:{Icon}
})
  export default class Calculator extends Vue {
    @Prop(String) classPrefix?: string;
    @Prop({required: true, type: String}) note!: string;
    @Prop({required: true, type: Number}) amount!: string;

    buttonList: string[] = ['1', '2', '3', '+', '4', '5', '6', '-',
      '7', '8', '9', 'ok', '.', '0'];
    value = '';

    // onInput(event: KeyboardEvent){
    //   const input =event.target as HTMLButtonElement;
    //   this.value= input.value;
    // }

    output  = '0';
    dot = true;
    // 有效数字最多为.前6位.后2位
    validNumberBeforeDot = 6;
    validNumberAfterDot = 2;
    // 记录运算
    operator = '';
    inputConent(event: MouseEvent){
      const button =(event.target as HTMLButtonElement);
      const input =button.textContent as string; //相当于是 as String 强制指定类型，肯定不是空
      if(this.output.length === 20){return;}
      if(this.output==='0'){
        if('0123456789'.indexOf(input)>=0){
          this.output =input;
        }else{
          this.output+=input;
        }
        return
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output+=input;
    }

  remove() {
    if (this.output.length > 1) {
      const last = this.output.slice(-1);
      if (last === '.') {
        this.dot = true;
      } else if ('+-'.indexOf(last) >= 0) {
        this.operator = '';
      } else if ('0123456789'.indexOf(last) >= 0) {
        if (this.dot) {
          this.validNumberBeforeDot += 1;
        } else {
          this.validNumberAfterDot += 1;
        }
      }
      this.output = this.output.slice(0, -1);
    } else {
      this.output = '0';
      this.reset();
    }
  }

  reset() {
    this.dot = true;
    this.validNumberBeforeDot = 6;
    this.validNumberAfterDot = 2;
  }
}



</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .note{
    display: flex;
    align-items: center;
    padding: 4px 8px;
    font-size: 14px;
    border-top:1px solid #f5f5f5;
    background: lighten(#f5f5f5, 4%);

    .icon{
      margin-right: 5px;
      margin-top:3px;
    }

    span{
      white-space:nowrap;
    }

    input{
      flex:1;
      margin-left: 8px;
      height:32px;
      border:none;
      background: inherit;
    }
  }

  .panel{
    background:#f5f5f5;
    padding:6px 12px;
    font-size: 24px;
    line-height: 24px;
    font-family: Consolas, monospace;
    text-align: right;
  }

  .number-pad{
    @extend %clearFix;

    button{
      $h:56px;
      float:left;
      width:25%;
      height:$h;
      font-size: 16px;
      border:none;
      color: darken($color-background, 22%);

      &.ok{
        float: right;
        height: $h*2;
      }

      $bg:$color-font;

      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 3%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 3*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 3*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 3*4%);
      }
      &:nth-child(15) {
        background: darken($bg, 3*5%);
      }
      &:nth-child(12) {
        background: darken($bg, 3*6%);
      }
    }
  }
}
</style>