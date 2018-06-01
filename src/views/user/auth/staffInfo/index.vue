<template>
    <div class="staffInfo-container">
        <h2>您好，</h2>
        <p>该功能仅限企业员工使用，需验证员工信息后方可继续，请您完善以下信息。</p>
        <div class="input-box">
            <div class="staff-name">
                <input type="text" v-model="staffName" placeholder="请输入员工姓名">
            </div>
            <div class="staff-number">
                <!-- <input type="number" v-model="staffNumber" :placeholder="modeMap[mode]"> -->
                <input type="email" v-model="staffNumber" placeholder="请输入身份证号/员工号/体检编号">
            </div>
        </div>
        <button class="sc-button" :disabled="staffName.length>0&staffNumber.length>0?false:true" @click="handleAuth">验&nbsp;&nbsp;&nbsp;&nbsp;证</button>
    </div>
</template>
<style lang="scss" scoped>
.staffInfo-container {
  width: 100%;
  padding: 0.8rem 0.625rem 0 0.625rem;
  h2 {
    font-size: 0.36rem;
    font-weight: 500;
    line-height: 0.68rem;
  }
  p {
    font-size: 0.3rem;
    line-height: 0.62rem;
  }
  .input-box {
    div {
      height: 0.9rem;
      border-bottom: 1px solid #e7eaf1;
      display: flex;
      align-items: center;
      input {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        text-indent: 0.1rem;
      }
      &.staff-name {
        margin-top: 0.7rem;
      }
      &.staff-number {
        margin-top: 0.3rem;
      }
    }
  }
  button {
    margin-top: 1rem;
  }
}
</style>
<script>
import { setCookie } from "@/utils/tools"
export default {
  name: "EnterStaffInfo",
  data() {
    return {
      companyName: "",
      staffName: "",
      staffNumber: "",
      mode: "",
      modeMap: {
        identity: "请输入身份证号",
        employee_no: "请输入员工号",
        checkup_no: "请输入体检编号"
      },
      errorResult: [
        "您输的号码有误或您不在团检体检名单中，请重新输入，如有问题请联系一键康客服：<br>400-188-9871",
        "此号码已经被另一个用户使用，请确认号码是否属于本人，如有疑问请联系客服：<br>400-188-9871",
        "您所输入的企业名称有误或贵公司暂时不在团检时间内，如有疑问请联系客服：<br>400-400-188-9871"
      ]
    };
  },
  methods: {
    handleAuth() {
      var loading = this.$toast({
        type: "loading",
        message: "正在验证",
        duration: 0,
        shadow: true
      });
      this.$http
        .post("entcheckup/authentication", {
        //.post("http://192.168.16.181:8999/entcheckup/authentication", {
          entName: this.companyName,
          name: this.staffName,
          authticationStr: this.staffNumber,
          //type: this.mode
        })
        .then(res => {
          loading.close();
          console.log(res);
          if (res.data.rc === 0) {
            if (res.data.data.bscode === "0") {
              setCookie("realName",this.staffName)//用户名
              if (res.data.data.isIdentity) {
                setCookie("ID",this.staffNumber)
              }
              //成功跳转到医院列表
              this.$toast({
                  message: "鉴权成功",
                  duration: 1000
              })
              setTimeout(()=>{
                this.$router.push("/hospital/list");
              },1000)
            } else {
              this.$prompt({
                title: "很抱歉！",
                message: this.errorResult[res.data.data.bscode - 1],
                successText: "重新输入",
                failText: "<a href='tel:4001889871'>拨打电话</a>"
              });
            }
          } else {
            this.$toast({
              message: res.data.msg
            });
          }
        }).catch(err=>{
          loading.close();
        })
    }
  },
  created() {
    this.companyName = decodeURIComponent(this.$route.params.name);
    this.mode = this.$route.params.mode;
  }
};
</script>
