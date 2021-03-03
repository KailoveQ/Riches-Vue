<template>
<div>
  <TypeList dynamic selected-tag tag-list=""></TypeList>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TypeList from '@/components/Money/TypeList.vue';
@Component({
  components: {TypeList}
})
export default class Tag extends Vue {

}
</script>

<style lang="scss" scoped>

</style>