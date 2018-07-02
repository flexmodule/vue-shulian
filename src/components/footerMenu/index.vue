<template>
  <div class="footer">
    <div class="logo"><a href="#"><img src="#" alt=""></a></div>
    <div class="advice">
      <i></i>
      <p>塾链先生</p>
    </div>
    <div class="organization">
      <i></i>
      <p>线下教育机构</p>
    </div>
    <div class="onlineCourse">
      <i></i>
      <p>线上课程</p>
    </div>
    <div class="myinfo">
      <i></i>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  data() {
    return {
      startX: 0, //触摸位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
  }
</style>