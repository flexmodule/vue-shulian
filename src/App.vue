<template>
  <div id="shulian">
    <div class="main-container">
      <transition 
        name="fade" 
        mode="out-in">
        <router-view/>
      </transition>
    </div>
    <footer-menu/>
  </div>
</template>

<script>
import footerMenu from "./components/footerMenu";
export default {
  name: 'shulian',
  components: {
    footerMenu
  },
}
</script>
<style src="@/static/assets/iconfont.css"></style>
<style lang="scss">
// 引入样式重置
@import './static/scss/config/_reset.scss';
//引入动画配置
@import './static/scss/config/_animate.scss';
//引入常用设置
@import './static/scss/config/_setting.scss';

</style>
