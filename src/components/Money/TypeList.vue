<template>
  <ul class="tags" :class="{[classPrefix+'-tags']:classPrefix}">

      <li v-for="(tag,index) in tagList" :key="index" @click="select(tag)" class="tags-item" :class="{[classPrefix+'-tags-item']: classPrefix}">
        <div class="tags-item-icon" :class="{'selected': tag.name === selectedTag.name, [classPrefix+'-tags-item-icon']: classPrefix}">
          <Icon :name='tag.name' />
        </div>
        <span>{{tag.value}}</span>
      </li>

      <li v-if="dynamic" class="tags-item">
        <div class="tags-item-icon" @click="add">
          <Icon name="add" />
        </div>
        <span>添加</span>
      </li>
  </ul>

</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
components:{Icon}
})
    export default class TagList extends Vue {
      @Prop(String) classPrefix?: string;
      @Prop({required: true,type: Object}) selectedTag!: TagItem;
      @Prop({required: true,default:false}) dynamic!: boolean;
      @Prop({required: true,type: Array}) tagList!: TagItem[];

      select(tag: TagItem){
          this.$emit('update:selectedTag',tag);
      }

      add(){
          this.$router.replace('/tags');  //TODO
      }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  &-item {
    width: 25%;
    padding: 12px 0;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-icon {
      width: 48px;
      height: 48px;
      padding: 4px;
      border-radius: 50%;
      background: #e9f3ee;
      margin-bottom: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.selected {
        background: $color-background;

        svg {
          width: 30px;
          height: 30px;
          color:white
        }
      }
      svg {
        width: 30px;
        height: 30px;
        color:rgb(128, 130, 131)
      }
    }
  }
}

</style>