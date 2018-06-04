<template>
  <div class="home">
    <div class="address">
      <b>
        <i class="iconfont icon-map"></i>
        <span>{{currentPosition}}</span>
        <i class="iconfont icon-moreunfold"></i>
      </b>
    </div>
    <div class="search">
      <router-link tag="div" to="/search">
        <div class="search-input">
          <i class="iconfont icon-search"></i>
          <span>查找您的课程链</span>
        </div>
      </router-link>
    </div>
    <mt-swipe :auto="0">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
      <mt-swipe-item>4</mt-swipe-item>
      <mt-swipe-item>5</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import { getPosition } from "@/utils/tools";
export default {
  name: "Home",
   components: {
    Swipe,
    SwipeItem
  },
  data() {
      return {
        currentPosition: "阿里巴巴"
      }
    },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 200px;
  .address {
    font-size: 0;
    padding: .2rem;
    background: #0af;
    b {
      font-style: normal;
      display: inline-block;
    }
    span {
      font: 700 .14rem/.4rem "";
      display: inline-block;
      margin: 0 .1rem;
      color: #fff;
    }
    i {
      font: 700 .3rem/.4rem "";
      color: #fff;
      width: .25rem;
      height: .4rem;
      display: inline-block;
    }
  }
  .search {
    background: #0af;
    padding: .15rem;
    text-align: center;
    .search-input {
      width: 6.94rem;
      height: .72rem;
      margin: 0 auto;
      background: #fff;
      i,span {
        display: inline-block;
        margin-top: .2rem;
      }
    }
  }
  .swiper-container {
    height: 100%;
  }
}
</style>
