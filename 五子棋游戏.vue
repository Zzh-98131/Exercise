<!--
 * @Author: zengzehua
 * @Date: 2022-09-27 14:11:18
 * @LastEditors: zengzehua
 * @LastEditTime: 2022-09-28 16:50:11
 * @Description: 切换孩子&加入班级
 * @FilePath: \parent-community\src\views\childSetting\index.vue
-->
<template>
    <div class="childSetting">
        <van-nav-bar class="nav" title="" left-arrow @click-left="$router.go(-1)">
            <template #left>
                <svg-icon icon-class="back" class="go-back"></svg-icon>
            </template>
        </van-nav-bar>

        <van-tabs v-model="tab" swipeable title-active-color="#2F8AFF" color="#2F8AFF">
            <van-tab title="我的孩子">内容 1</van-tab>
            <van-tab title="加入班级">内容 2</van-tab>
        </van-tabs>
        <div @click="putChess">
            <van-grid class="grid" square column-num="10" :border="false">
                <van-grid-item class="grid-item" v-for="i in 100" :key="i" :data-index="i">
                    <div class="cross">
                        <div class="in in1"></div>
                        <div class="in in2"></div>
                    </div>
                    <div class="cross">
                        <div class="in in3"></div>
                        <div class="in in4"></div>
                    </div>
                    <div class="chess white" v-show="gridList[i] == 1"></div>
                    <div class="chess black" v-show="gridList[i] == 2"></div>
                </van-grid-item>
            </van-grid>
        </div>
        <van-button @click="fallBack">悔棋</van-button>
    </div>
</template>

<script>
export default {
    name: 'childSetting',
    data() {
        return {
            tab: 0,
            gridList: new Array(100),
            turn: true,
            chessIndex: [],
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        /* ========== 接口开始 ========== */
        
        /* ========== 接口结束 ========== */
        putChess(e) {
            e = e || window.event
            const { index } = e.target.dataset
            if (index != undefined) {
                this.chessIndex.push(index)
                console.log(e.target.dataset.index);
                this.gridList[index] = this.turn ? 2 : 1
                this.$forceUpdate()
                this.turn = !this.turn
                console.log(this.gridList);
            }
        },
        fallBack() {
            if (this.chessIndex.length) {
                this.gridList[this.chessIndex.pop()] = 0
                this.turn = !this.turn
                this.$forceUpdate()
            }
        }
    },
}
</script>

<style lang="less" scoped>
.childSetting {
    text-align: center;
    padding-top: @titleHeight;

    /deep/ .van-grid-item__content {
        padding: 0;
    }
    .grid {
        &-item {
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
            .chess {
                z-index: 9;
                position: absolute;
                width: 80%;
                height: 80%;
                .border;
                border-radius: 50%;
            }
            .white {
                background: white;
            }
            .black {
                background: black;
            }
            .cross {
                width: 100%;
                .flex;
                .in {
                    width: 50%;
                    height: 18.75px;
                    &1 {
                        border-right: 1px black solid;
                        border-bottom: 1px black solid;
                    }
                    &2 {
                        border-left: 1px black solid;
                        border-bottom: 1px black solid;
                    }
                    &3 {
                        border-top: 1px black solid;
                        border-right: 1px black solid;
                    }
                    &4 {
                        border-top: 1px black solid;
                        border-left: 1px black solid;
                    }
                }
            }
        }
    }
    
    .nav {
        position: fixed;
        width: 100%;
        top: 0;
        .go-back {
            font-size: 24px;
        }
    }
}
</style>