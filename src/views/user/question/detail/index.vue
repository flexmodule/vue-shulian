<template>
  <div class="question-detail_container">
    <div class="question-detail">
      <h2>{{detail[this.$route.params.class][$route.params.id-1]['title']}}</h2>
      <p v-for="(t,i) in detail[this.$route.params.class][$route.params.id-1]['content']">{{t}}</p>
    </div>
    <a class="contact" href="tel:4001889871">联系人工客服</a>

  </div>
</template>
<style lang="scss" scoped>
.question-detail_container {
  padding: 0 0.4rem;
  .question-detail {
    h2 {
      font-size: 0.34rem;
      padding: 0.4rem 0;
    }
    p {
      font-size: 0.3rem;
      line-height: 0.7rem;
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
  name: "QuestionDetail",
  data() {
    return {
      detail: {
        reserve: [
          {
            title: "如何在“一健康”购买体检套餐并预约？",
            content: [
              "1、点击APP“首页”的“健康体检”按钮。",
              "2、选择你需要的体检套餐，选择时间和体检人信息，并确认提交。",
              "3、完成支付后即预约成功"
            ]
          },
          {
            title: "在“一健康”平台下单后，到医院如何进行体检？",
            content: ["订单支付以后，即视为预约成功，您只需在预约的时间凭借预约短信、身份证去预约的医院体检即可。"]
          },
          {
            title: "在预约的时间去体检，但是医院不提供服务怎么办？",
            content: [
              "确认订单上的时间、医院、体检套餐、体检者信息是否正确，如果还是无法进行体检可以联系“一键康”客服400-188-9871处理。"
            ]
          },
          {
            title: "预约了体检，当天没有去订单会不会作废？",
            content: ["不会作废，您可以拨打我们“一键康”客服电话400-188-9871，待核对信息后为您重新预约体检时间。"]
          },
          {
            title: "体检前的注意事项？",
            content: [
              "1、体检前24小时避免辛辣油腻食品、饮酒及过度劳累。",
              "2、体检前当日应避免吃早餐，抽血不宜超过上午10:30。",
              "3、高血压、心脏病、糖尿病等慢病患者，可以喝一口白水吃药，到检后需要通知医生。",
              "4、有放射检查（X光,CT）的客户，当天请勿佩戴金属配饰。已孕或者备孕体检者建议不做放射检查。",
              "5、女性客人体检请避开月经期，建议穿着轻便裤装。",
              "6、需空腹检查的项目为抽血、腹部B超、隐血珠、碳13。内科检查前请您先测量血压。"
            ]
          }
        ],
        report: [
          {
            title: "如何查看体检报告？",
            content: [
              "支持查看电子体检报告的医院，会在您完成体检后的7-20工作日上传体检报告，您可以点击app“报告”页面查看您的体检报告。"
            ]
          },
          {
            title: "如何找回历史报告？",
            content: ["您可以点击APP“报告”页面，点击“报告找回”按钮，确认您的个人信息后，我们会找回与您信息相匹配的历史报告。"]
          },
          {
            title: "电子报告与纸质报告的区别？",
            content: ["两种报告的内容一致，都可以全面的概括您此次体检的情况。"]
          },
          {
            title: "看不懂体检报告怎么办？",
            content: ["您可以直接在电子报告底部点击我们的报告解读专线：400-188-9871，一键康的专业医生将详细为您解答。"]
          }
        ],
        order: [
          {
            title: "如何退款？",
            content: [
              "您可以在“我的订单”页面点击“修改预约”或“申请售后”按钮，联系一键康的客服，待工作人员确认后操作退款，款项会在3-7个工作日内原路退回。"
            ]
          },
          {
            title: "如何取修改预约时间？",
            content: ["您可以在“我的订单”页面点击“修改预约”或“申请售后”按钮，联系一键康的客服，沟通并在此确认体检时间。"]
          }
        ]
      }
    };
  }
};
</script>