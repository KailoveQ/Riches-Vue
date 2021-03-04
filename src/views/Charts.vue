<template>
    <Layout>

    </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';

import Icon from '@/components/Icon.vue';

import Blank from '@/components/Blank.vue';



type Group={
    tag: TagItem;
    amount: number;
    percentage: number;
}

@Component({
    components:{Layout,Icon,Blank}
})
   export default class Charts extends Vue{

   }


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.header {
        background: $color-background;
        padding: 4px 0;
        color:black;
        .toggle-wrapper{
            
            .type {
            font-size: 20px;
            padding: 2.5px 10px;
        }
        }
        
        ::v-deep {
            .interval-tab-bar {
                margin: 8px 10px;
                display: flex;
                justify-content: center;
                .interval-tab-bar-item {
                    font-size: 14px;
                    width: 33%;
                    border: 1px solid black;
                    &:first-child {
                        border-radius: 4px 0 0 4px;
                    }
                    &:last-child {
                        border-radius: 0 4px 4px 0;
                    }
                    &.selected {
                        background:black;
                        color: white;
                    }
                }
            }
        }
    }
    .chart {
        padding: 6px 0;
        border-bottom: 1px solid #dddddd;
        .caption {
            border-bottom: 1px solid #dddddd;
            display: flex;
            span {
                padding: 8px 16px;
                font-size: 14px;
            }
        }
        .total {
            font-size: 14px;
            color: #999999;
            text-align: left;
            padding: 6px 6px;
        }
        .average {
            font-size: 12px;
            color: #999999;
            text-align: left;
            padding: 0 6px;
            margin-bottom: 16px;
        }
        #figure {
            width: 100%;
            height: 150px;
        }
    }
    .ranking {
        .caption {
            text-align: left;
            font-size: 14px;
            padding: 6px 16px;
        }
        .tag-list {
            padding: 6px 16px;
            .tag-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.1);
                font-size: 14px;
                .tag-info {
                    display: flex;
                    align-items: center;
                    .icon {
                        background: #b08fee;
                        color:white;
                        border-radius: 50%;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 8px;
                        svg {
                            width: 24px;
                            height: 24px;
                        }
                    }
                    span {
                        margin-right: 8px;
                        line-height: 32px;
                    }
                }
            }
        }
    }
    .reverse {
        margin-top: 36px;
    }
</style>