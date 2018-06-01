<template>
  <div class="userInfo-container">
    <div class="user-info">
      <div class="user-avatar"><img :src="userAvatar?userAvatar:'./static/images/avatar.png'"></div>
      <div class="user-edit">
        <span v-if="!isLogin" @click="$router.push('/user/login?target=/user/info')">登录 / 注册</span>
        <span v-if="isLogin">{{nickName}}</span>
        <p v-if="isLogin">
          <b @click="$router.push('/user/edit')">编辑个人信息</b>
          <i><img src="../../../static/images/icon_sq@2x.png" alt="" srcset=""></i>
        </p>
      </div>
    </div>
    <div class="function-module">
      <router-link to="/order">
        <div class="module-order module">
          <div>
            <i><img src="../../../static/images/icon_wddd@2x.png"></i>
            <span>我的订单</span>
          </div>
          <div class="arrow">
            <img src="../../../static/images/icon_sqh@2x.png">
          </div>
        </div>
      </router-link>

      <router-link to="/report">
        <div class="module-report module">
          <div>
            <i><img src="../../../static/images/icon_wdbg@2x.png"></i>
            <span>我的报告</span>
          </div>
          <div class="arrow">
            <img src="../../../static/images/icon_sqh@2x.png">
          </div>
        </div>
      </router-link>

      <router-link to="/user/question/list">
        <div class="module-question module">
          <div>
            <i><img src="../../../static/images/icon_cjwt@2x.png"></i>
            <span>常见问题</span>
          </div>
          <div class="arrow">
            <img src="../../../static/images/icon_sqh@2x.png">
          </div>
        </div>
      </router-link>
      <router-link to="/user/option">
        <div class="module-option module">
          <div>
            <i><img src="../../../static/images/icon_cjwt@2x.png"></i>
            <span>设置</span>
          </div>
          <div class="arrow">
            <img src="../../../static/images/icon_sqh@2x.png">
          </div>
        </div>
      </router-link>
    </div>
    <div class="remark">
      <p>注：该公众号只适用于一键康体检平台的团检用户，个检用户预约体检、订单查询等需求请关注“一键康”公众号或者下载“一键康”app。</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userInfo-container {
  .user-info {
    width: 100%;
    height: 3rem;
    background-image: url(../../../static/images/img_bj@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    .user-avatar {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin-left: 0.7rem;
      overflow: hidden;
      // margin-top: 0.9rem;
    }
    .user-edit {
      font-size: 0.42rem;
      margin-left: 0.5rem;
      // margin-top: 1rem;
      span {
        // margin-bottom: 0.2rem;
        display: block;
        font-size: 0.42rem;
        line-height: 0.68rem;
      }
      p {
        display: flex;
        align-items: center;
        margin-top: 0.1rem;
        b {
          display: block;
          font-size: 0.26rem;
          font-weight: normal;
          color: $fc-gray;
        }
        i {
          width: 0.5rem;
          height: 0.5rem;
          display: block;
        }
      }
    }
  }
  .function-module {
    padding: 0 0.4rem;
    a {
      display: block;
    }
    .module {
      font-size: 0.28rem;
      color: $fc-black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        margin: 0.4rem 0;
        span {
          margin-left: 0.4rem;
        }
      }

      i img {
        width: 0.36rem;
        height: 0.36rem;
      }
      .arrow img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .module-report,
    .module-option {
      border-bottom: 1px solid #e7eaf1;
    }
  }
  .remark p {
    font-size: 0.26rem;
    line-height: 0.5rem;
    color: $fc-gray;
    padding: 0 0.4rem;
    margin-top: 0.5rem;
  }
}
</style>
<script>
import { getCookie } from "@/utils/tools";
export default {
  name: "UserInfo",
  data() {
    return {
      isLogin: false,
      nickName: "",
      userAvatar: null
    };
  },
  methods: {
    getInfo() {
      this.$http.get("/personal/query/").then(res => {
        if (res.data.rc === 0) {
          this.nickName = res.data.data.nickName;
          this.userAvatar = res.data.data.avatar;
        } else {
          this.$toast({
            message: res.data.msg
          });
        }
      });
    }
  },
  created() {
    this.isLogin = getCookie("isLogin") == "true" ? true : false;
  },
  mounted() {
    if (this.isLogin) {
      this.getInfo(); 
    }
  }
};
</script>
