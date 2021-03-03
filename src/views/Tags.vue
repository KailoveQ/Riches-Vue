<template>
  <div class="tags">
    <div class="fixed">
      <header class="header">
        <div class="title">
          <button class="back" @click="back">
            <Icon name="left"/>
          </button>
          <span>添加支出类别</span>
        </div>
        <button class="ok" @click="ok">完成</button>
      </header>
      <div class="current">
        <div class="label">
          <span>选中标签: </span>
          <div class="icon">
            <Icon :name="tag.name"/>
          </div>
        </div>
        <span>{{tag.value}}</span>
      </div>
    </div>
    <div class="content">
      <div class="food">
        <div class="kind-name">
          餐饮
        </div>
        <TypeList class-prefix="main" :tag-list="foodTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>

      <div class="food">
        <div class="kind-name">
          购物
        </div>
        <TypeList class-prefix="main" :tag-list="shoppingTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>

      <div class="food">
        <div class="kind-name">
          交通
        </div>
        <TypeList class-prefix="main" :tag-list="transportTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>

      <div class="food">
        <div class="kind-name">
          居住
        </div>
        <TypeList class-prefix="main" :tag-list="houseTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>

      <div class="food">
        <div class="kind-name">
          娱乐
        </div>
        <TypeList class-prefix="main" :tag-list="entertainmentTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>

      <div class="food">
        <div class="kind-name">
          医疗
        </div>
        <TypeList class-prefix="main" :tag-list="medicalTags" :selected-tag.sync="tag" :dynamic="false"></TypeList>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import {
  entertainmentTags,
  foodTags,
  houseTags,
  medicalTags,
  shoppingTags,
  transportTags
} from '@/contants/defaultTags';
import Icon from '@/components/Icon.vue';
import clone from '@/lib/clone';
import TypeList from '@/components/Money/TypeList.vue';
@Component({
  components: {TypeList, Icon, Layout}
})
export default class Label extends Vue {
  tag: TagItem = {name: 'food', value: '餐饮'};
  foodTags = foodTags;
  shoppingTags = shoppingTags;
  transportTags = transportTags;
  houseTags = houseTags;
  entertainmentTags = entertainmentTags;
  medicalTags = medicalTags;


  back() {
    this.$router.replace('/money');
  }
  ok() {
    this.$store.commit('insertTag', clone(this.tag));
    if (this.$store.state.tagListError === 'duplicate') {
      window.alert('不可添加同名的标签类别');
    } else {
      this.$router.replace('/money');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@mixin icon($color) {
  background: white;
  border: 1px solid transparent;
  color: $color;
  svg {
    border: 1px solid red;
    width: 24px;
    height: 24px;
  }
  &.selected {
    border: 1px solid #b08fee;
    background: transparent;
  }
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
}
.header {
  background: $color-background;
  color:$color-font;
  font-size: 20px;
  line-height: 24px;
  padding: 16px 10px;
  border-bottom: 1px solid $color-background;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    .back {
      svg {
        width: 24px;
        height: 24px;
      }

      border: none;
      margin-right: 8px;
      color:$color-font;
    }
  }
  .ok {
    font-size: 16px;
    color: $color-font;
    border: none;
    background: inherit;
  }
}
.current {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.3);
  .label {
    display: flex;
    align-items: center;
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: $color-background;
      border: 1px solid $color-background;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
.content {
  padding-top: 120px;

}
.kind-name {
  font-size: 14px;
  color: #434343;
  font-weight: bold;
}
</style>