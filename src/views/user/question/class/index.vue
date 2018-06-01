<template>
  <div class="class-container">
    <div class="class-item" v-for="(t,i) in content[this.$route.params.class]" :key="i" @click="$router.push({path: `/user/question/class/${$route.params.class}/${i+1}`})">
      <p>{{t}}</p>
      <img src="../../../../static/images/icon_wsq@2x.png">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.class-container {
  padding-left: 0.4rem;
  padding-right: 0.3rem;
  .class-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    height: 1.08rem;

    border-bottom: 1px solid #e7eaf1;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>
<script>
export default {
  name: "QuestionClass",
  data() {
    return {
      class: "",
      content: {
        reserve: [
          "如何在“一键康”购买体检套餐并预约",
          "在“一键康”平台下单后，到医院如何进行体检",
          "在预约的时间去体检，但是医院不提供服务怎么办",
          "预约了体检，当天没有去订单会不会作废？",
          "体检前的注意事项"
        ],
        report: ["如何查看体检报告？", "如何找回历史报告？", "电子报告与纸质报告的区别？", "看不懂体检报告怎么办？"],
        order: ["如何退款？", "如何取修改预约时间？"]
      }
    };
  }
};
</script>
