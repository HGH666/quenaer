<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide v-for="item in  num" :key="item.id">
            <div class="icon-box">
                <ul v-for="x in item" :key="x.id" class="icon" >
                    <li :ref="x.desc"><img :src=x.imgUrl>
                        <p>{{x.desc}}</p>
                    </li>
                </ul>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

    export default {
        name: 'iconList',
        props: ['myjson'],
        data() {
            return {
                swiperOption: {
                }
            }
        },
        methods:{

        },
        computed: {
            iconList(){
                return this.$store.state.iconList
            },
            num() {
                let Json = this.iconList;
                let arr = [];
                for (let i = 0; i < Json.length; i += 8) {
                    arr.push(Json.slice(i, i + 8))
                }
                return arr;
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            },
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            this.swiper.slideTo(0, false)
        }
    }
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .icon-box {
        display: flex;
        flex-wrap: wrap;
        .icon {
            width: 25%;
            text-align: center;
            font-size: .30rem;
            li {
                img {
                    padding: .2rem 0;
                    display: block;
                    width: 1.23rem;
                    margin: 0 auto;
                }
            }
        }
    }
</style>

