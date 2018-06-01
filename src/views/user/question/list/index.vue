<template>
  <div class="question-container">
    <router-link to="/user/question/class/reserve">
      <div class="question-class">
        <div class="class-info">
          <p>
            <b>体检预约</b> <img src="../../../../static/images/icon_wsq@2x.png"></p>
          <span>预约方式，如何体检</span>
        </div>
      </div>
    </router-link>
    <router-link to="/user/question/class/report">
      <div class="question-class">
        <div class="class-info">
          <p>
            <b>体检报告</b> <img src="../../../../static/images/icon_wsq@2x.png"></p>
          <span>报告查询时间、报告获取方式</span>
        </div>
      </div>
    </router-link>
    <router-link to="/user/question/class/order">
      <div class="question-class">
        <div class="class-info">
          <p>
            <b>订单相关</b> <img src="../../../../static/images/icon_wsq@2x.png"></p>
          <span>报告查询时间、纸质报告获取方式</span>
        </div>
      </div>
    </router-link>

    <!-- 联系人工客服 -->
    <a class="contact" href="tel:4001889871">联系人工客服</a>

  </div>
</template>
<style lang="scss" scoped>
.question-container {
  padding: 0 0.4rem;
  a {
    display: block;
    .question-class {
      border-bottom: 1px solid #e7eaf1;
      .class-info {
        color: $fc-black;
        font-size: 0.26rem;
        padding: 0.4rem 0;
        p {
          font-size: 0.3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        span {
          display: block;
          margin-top: 0.4rem;
          color: $fc-gray;
        }
      }
    }
  }

  .contact {
    display: block;
    width: 6.2rem;
    height: 0.9rem;
    font-size: 0.3rem;
    line-height: 0.9rem;
    color: $fc-black;
    border: 1px solid #8c8c8c;
    border-radius: 0.1rem;
    margin: 0 auto;
    text-align: center;
    margin-top: 0.8rem;
  }
}
</style>
<script>
export default {
  name: "QuestionList",
  methods: {}
};
</script>
