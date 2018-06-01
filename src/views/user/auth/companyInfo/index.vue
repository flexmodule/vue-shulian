<template>
  <div class="auth-container">
    <div class="bg-image"></div>
    <div class="input-info">
      <h2>尊贵的企业员工</h2>
      <p>欢迎使用，一键康企业专用平台</p>
      <div class="input-box">
        <input type="text" v-model="companyName" @focus="handleFocus" placeholder="请输入您的企业名称" />
      </div>
      <button class="next-button" :disabled="companyName.length>0?false:true" @click="next">下一步</button>
    </div>
    <div class="search-container" v-if="showSearch">
      <div class="searchInput-box">
        <input type="text" v-model="searchValue" @keyup="handleFetch" @keyup.enter="handleEnter" v-focus ref="searchInput" autofocus="autofocus" placeholder="请输入您的企业名称">
        <i @click="searchValue=''" v-show="showEmptied"></i>
        <b v-show="showEmptied">|</b>
        <em @click="showSearch=false">取消</em>
      </div>
      <div class="resultList">
        <p v-show="searchResult.length>0">请选择您所在的企业</p>
        <ul @click="handleSelect">
          <li v-show="noResult">抱歉，没有该企业信息，请检查输入是否有误。<br>如需帮助请拨打400-188-9871</li>
          <li v-for="item in searchResult">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.auth-container {
  position: relative;
}
.auth-container .bg-image {
  width: 100%;
  height: 5.2rem;
  background: url(../../../../static/images/img_bg_qytj@2x.png) no-repeat;
  background-size: cover;
}
.auth-container .input-info {
  padding: 0 0.65rem;
  h2 {
    font-size: 0.46rem;
    font-weight: 500;
  }
  p {
    font-size: 0.26rem;
    color: $fc-gray;
    margin-top: 0.3rem;
  }
  .input-box {
    height: 0.9rem;
    margin-top: 0.6rem;
    border-bottom: 1px solid #e7eaf1;
    display: flex;
    align-items: center;
    input {
      display: block;
      width: 100%;
      font-size: 0.3rem;
      text-indent: 0.1rem;
      text-overflow: ellipsis;
    }
  }
  button {
    margin-top: 0.8rem;
    width: 100%;
    height: 0.9rem;
    color: #fff;
    text-align: center;
    font-size: 0.26rem;
    border-radius: 0.1rem;
    background-color: $blue;
    &[disabled="disabled"] {
      background-color: $gray;
    }
  }
}
.auth-container .search-container {
  padding: 0 0.65rem;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  padding-top: 0.5rem;
  .searchInput-box {
    background-color: #fff;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7eaf1;
    input {
      display: block;
      width: 4.2rem;
      font-size: 0.3rem;
      text-indent: 0.1rem;
    }
    i {
      width: 0.5rem;
      height: 0.5rem;
      background: url(../../../../static/images/icon_sc_ssqy@2x.png) no-repeat;
      background-size: cover;
    }
    b {
      color: $fc-gray;
      font-size: 0.3rem;
      font-weight: normal;
      margin-left: 0.3rem;
    }
    em {
      font-size: 0.3rem;
      font-style: normal;
      color: $fc-black;
      margin-left: 0.4rem;
    }
  }
  .resultList {
    color: $fc-black;
    p {
      font-weight: 500;
      margin-top: 0.54rem;
      margin-bottom: 0.3rem;
      font-size: 0.36rem;
    }
    li {
      padding: 0.3rem 0;
      font-size: 0.3rem;
    }
  }
}
</style>

<script>
import { setCookie } from "@/utils/tools";
export default {
  data() {
    return {
      companyName: "",
      showSearch: false,
      showEmptied: false,
      searchValue: "",
      noResult: false,
      searchResult: []
    };
  },
  watch: {
    searchValue: "handleEmpty"
  },
  methods: {
    next() {
      // this.$http.get('entcheckup/confirm-enterprise?entName='+this.companyName).then(res=>{
      // 	console.log(res)
      // 	if (res.data.rc===0) {
      //验证模式
      setCookie("companyName", this.companyName);
      this.$router.push({
        path: `/user/auth/staff-info/${encodeURIComponent(this.companyName)}`
        //path: `/user/auth/staff-info/${encodeURIComponent(this.companyName)}/identity`
        //path: `/user/auth/staff-info/${encodeURIComponent(this.companyName)}`
      });
      // }
      // })
    },
    handleFocus(e) {
      e.target.blur(); //
      this.showSearch = true;
    },
    handleEmpty() {
      this.searchValue.length > 0
        ? (this.showEmptied = true)
        : (this.showEmptied = false);
    },
    handleSelect(e) {
      console.log(e.target.innerText);
      this.showSearch = false;
      this.searchValue = e.target.innerText;
      this.companyName = e.target.innerText;
    },
    handleEnter() {
      if (this.searchResult <= 0) {
        this.noResult = true;
      }
    },
    handleFetch() {
      this.$http
        .get("entcheckup/match-entname?entName=" + this.searchValue)
        .then(res => {
          console.log(res);
          if (res.data.rc === 0) {
            this.searchResult = res.data.data;
            if (res.data.data.length > 0) {
              this.noResult = false;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
