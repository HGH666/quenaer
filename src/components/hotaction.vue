<template>
    <div class="hotactionList">
        <div class="hotaction-title">本周热门榜单</div>
        <div class="hidbox" ref="hidbox">
        <ul>
            <li v-for="item in hotactionData" :key="item.id">
                <img :src=item.hotactionImg>
                <div class="con-box">
                    <h1>{{item.hotactionName}}</h1>
                    <h2>￥<span>{{item.hotactionPrice}}</span>起</h2>
                </div>
            </li>
        </ul>
        </div>
    </div>

</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "hotactionList",
        computed: {
            hotactionData(){
                return this.$store.state.myJson
            }
        },
        mounted() {
            //挂载后使用bsroll插件
            this.scroll = new BScroll(this.$refs.hidbox,  { startX: 0, click: true, scrollX: true, scrollY: false, })
        }
    }
</script>

<style lang="less" scoped>
    .hotactionList {
        padding-top: .3rem;
        .hotaction-title {
            padding: .27rem .2rem;
            font-size: .3rem;
            background: #eee;
        }
        .hidbox{
            overflow: hidden;
            &>ul {
                width: 22rem;
                &:after{
                    content: '';
                    display: block;
                    clear: both;
                }
                li {
                    width: 2rem;
                    float: left;
                    padding: .1rem;
                    text-align: center;
                    img {
                        width: 100%;
                        height: auto;
                    }
                    .con-box {
                        h1 {
                            overflow: hidden;
                            font-size: .25rem;
                            padding-top: .1rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        h2 {
                            font-size: .28rem;
                            padding: .24rem 0 0 0;
                            color: #ccc;
                            span{
                                color: #ff8300;
                            }
                        }
                    }
                }
            }
        }

    }
</style>
