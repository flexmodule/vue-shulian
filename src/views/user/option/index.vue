<template>
  <div class="option-container">
    <div class="option-list" v-if="isLogin">
      <p>手机号</p>
      <p>{{handleNumber(currentTel)}}</p>
    </div>
    <div class="option-list" v-if="isLogin" @click="$router.push(`/user/update/check-number/${currentTel}`)">
      <p>修改密码</p>
      <img src="../../../static/images/icon_wsq@2x.png">
    </div>
    <div class="option-list" @click="$router.push('/user/protocol')">
      <p>用户协议</p>
      <img src="../../../static/images/icon_wsq@2x.png">
    </div>
    <div class="loginOut" v-if="isLogin" @click="loginout">退出登录</div>
  </div>
</template>
<style lang="scss" scoped>
.option-container {
  padding-left: 0.4rem;
  padding-right: 0.3rem;
  .option-list {
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
  .loginOut {
    width: 6.2rem;
    margin: 0 auto;
    margin-top: 0.8rem;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    line-height: 0.9rem;
    text-align: center;
    color: #fff;
    height: 0.9rem;
    background-color: $blue;
  }
}
</style>
<script>
import { setCookie,getCookie,delCookie } from "@/utils/tools";
export default {
  name: "Option",
  data() {
    return {
      isLogin: true,
      currentTel: ''
    };
  },
  methods: {
    handleNumber(number) {
      return number.slice(0, 3) + "****" + number.slice(7);
    },
    loginout() {
      delCookie("Authorization");
      delCookie("realName");
      delCookie("userTel");
      delCookie("userId");
      delCookie("groupId");
      setCookie('isLogin',false)
      setTimeout(() => {
        this.$router.push("/user/info");
      }, 1000);
    }
  },
  created() {
    this.currentTel = getCookie('userTel')
    this.isLogin = getCookie("isLogin") == "true" ? true : false;
  }
};
</script>

