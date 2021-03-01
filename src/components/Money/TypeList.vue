<template>

      <ul class="tags" :class="{[classPrefix+'-tags']:classPrefix}" >
        <li v-for="tags in initTags" :key="tags.name"   class="tags-item" :class="{[classPrefix+'-tags-item']: classPrefix}">
          <div class="tags-item-icon"  :class="{[classPrefix+'-tags-item-icon']: classPrefix}">
            <Icon :name="tags.name"/>
          </div>
          <span>{{tags.name}}</span>
        </li>
      </ul>

</template>

<script lang="ts">


export default {
  name: 'Types',
  props:['classPrefix'],
  data(){
    return{
      initTags :[
        { name: '餐饮'},
        { name: '购物'},
        { name: '居住'},
        { name: '交通'},
        { name: '娱乐'},
        { name: '医疗'},
        { name: '游戏'},
        { name: '添加'}
      ]
    }
  }

};

</script>

<style lang="scss" scoped>
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
      background: #f5f5f5;
      margin-bottom: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.selected {
        background: #b08fee;

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