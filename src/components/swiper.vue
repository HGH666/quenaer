<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper" v-if="swiperList">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>

    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            swiperList(){
                return this.$store.state.swiperList
            }
        },
        mounted() {
            this.swiper.slideTo(0, 1000, false)
        }
    }
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        height: 2.34rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
<style>
    .swiper-pagination-bullet-active {
        background: #fff !important;
    }
</style>
