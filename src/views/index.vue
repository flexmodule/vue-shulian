<template>
  <div class="app-container container">
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
<style lang="scss">
.main-container {
  width: 100%;
  color: #000;
  padding-top: 40px;
  background-color: #f0f0f0;
}

</style>

<script>
import footerMenu from "../components/footerMenu";
export default {
  components: {
    footerMenu
  },
  name: "Index",
  data() {
    return {};
  }
};
</script>