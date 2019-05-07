<template>
    <div id="app" >
      <router-view v-if="this.$store.state.indexData&&this.$store.state.cityData" />
        <div class="loading" v-else><img src="@/assets/loading4.gif"></div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                myjson:'',
                cityData:'',
                detailData:'',
                hotactionData:''
            }
        },
        components: {

        },
        created() {
            //在创建后获取数据
            this.$store.dispatch('getData')
        }
    }
</script>

<style lang="less">
    body{
        font-size: .18rem;
        .loading{
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: #fff;
            z-index: 55;
            img{
                position: fixed;
                display: block;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
</style>
