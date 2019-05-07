<template>
  <div class="head">
    <span class="back iconfont icon-left"></span>
    <Searsh></Searsh>
    <div class="head-right" @click="toData">{{rouData}}<span class="iconfont icon-caret-down"></span></div>
  </div>
</template>

<script>
  import Searsh from '@/components/searsh.vue'

  export default {
    data(){
      return{
        rouData:''
      }
    },
    components: {
      Searsh
    },
    methods:{
      toData(){
        this.$router.push({
          path:'/city',
          query:{
            id:this.rouData
          }
        })
      }
    },
    mounted() {
      this.rouData=this.$route.params.toData?this.$route.params.toData:window.localStorage.city?window.localStorage.city:'常熟';
      window.localStorage.setItem('city',this.rouData)
      console.log(this.rouData)
    }
  }
</script>

<style lang="less" scoped>
  .head {
    font-size: .30rem;
    display: flex;
    justify-content: flex-start;
    height: .86rem;
    align-items: center;
    background: #00bcd4;

    .back {
      font-size: .6rem;
      color: #fff;
    }

    .head-right {
      color: #fff;
      margin-left: .21rem;
    }
  }
</style>
