<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <IconList></IconList>
        <hotaction></hotaction>
        <recommendList></recommendList>
        <weekendList></weekendList>
    </div>
</template>

<script>

    import Header from '@/components/Header.vue'
    import Swiper from '@/components/swiper.vue'
    import IconList from '@/components/iconList.vue'
    import recommendList from '@/components/recommendList.vue'
    import weekendList from '@/components/weekendList.vue'
    import hotaction from '@/components/hotaction.vue'

    export default {
        name: "index",
        data() {
            return {
            }
        },
        components: {
            Header,
            Swiper,
            IconList,
            recommendList,
            weekendList,
            hotaction,
        },
    }

</script>

<style scoped>

</style>
