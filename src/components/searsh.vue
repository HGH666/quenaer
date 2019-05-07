<template>
  <div class="searsh">
    <input placeholder="输入城市/景点/旅游主题" type="text"/>
    <span class="iconfont icon-search shous"></span>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .searsh {
    margin-left: .1rem;
    position: relative;

    input {
      box-sizing: border-box;
      border-radius: .08rem;
      display: block;
      width: 5.42rem;
      height: .64rem;
      padding-left: .7rem;
    }

    input::-webkit-input-placeholder {
      color: #ccc;
    }

    .shous {
      font-size: .4rem;
      position: absolute;
      left: 0.25rem;
      color: #ccc;
      top: .1rem;
    }
  }
</style>
