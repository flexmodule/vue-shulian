<template>
<div>
  <div class="hos-adress-container" :style="'height:' +height+ 'px'" v-if="!empty">
     <div id="allmap"></div>
    <div class="hos-message">
      <div class="header">
        <div class="title">预约信息</div>
        <div class="router-button" @click="$router.push({path:'/adress/hos-route',query: {latitude: latitude,longitude: longitude} })"><img src="../../../static/images/icon_lx_yydz@2x.png"><span>查看路线</span></div>
      </div>

      <p>体检医院：{{hoptialName}}</p>
      <p>体检时间：{{checkupDate}}</p>
    </div>
  </div>
  <div class="empty-container" v-if="empty">
      <h2>尊敬的用户，您好!</h2>
      <p>请先进行团检预约，再查看团检医院地址。</p>
      <div @click="$router.push({path:'/hospital/list'})">立即团检预约</div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.hos-adress-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#allmap {
  width: 100%;
  flex: 1;
}
.hos-message {
  padding: 0 0.4rem;
  padding-top: 0.4rem;
  font-size: 0.3rem;
  color: $fc-black;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;
  }
  p {
    padding-bottom: 0.4rem;
    &.title {
      font-size: 0.36rem;
      font-weight: 500;
    }
  }
  .router-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #8c8c8c;
    border-radius: 0.1rem;
    height: 0.7rem;
    width: 2.48rem;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
    span{
      margin-left: 0.1rem;
    }
  }
}
.empty-container{
    width:100%;
    padding:1.66rem .6rem 0 .6rem;
    background:#fff;
    font-size:.3rem;
    color:$fc-black;
    h2{
       font-size:.4rem;
       color:$fc-black;
       font-weight:500;
    }
    p{
        padding-top:.3rem;
       padding-bottom:1.95rem; 
    }
    div{
        width:100%;
        height:.9rem;
        line-height: .9rem;
        text-align: center;
        color:#fff;
        background:$blue;
        border-radius:.1rem;
        font-size:.3rem;
    }
}
</style>
<script>
import { getMap } from "@/utils/tools";
export default {
  name: "HosAddress",
  data() {
    return {
      latitude: "", //经度
      longitude: "", //纬度
      hoptialName: "",
      checkupDate: "",
      checkupAdress: '',
      height: 0,
      content: '',
      empty: false
    };
  },
  mounted() {
    this.height = document.documentElement.clientHeight;
    this.fetch(() => {
        getMap("allmap",this.longitude, this.latitude);
      //getMap('allmap',120.1646900000,30.1870400000)
    });
  },
  methods: {
    fetch: function(callback) {
      this.$http
        .get("/reservation/checkup/hospitalAdress")
        .then(res => {
          if(res.data.rc === 0){
             //this.content = res.data.data;
             this.empty = false;
            this.latitude = res.data.data.latitude;
            this.longitude = res.data.data.longitude;
            this.hoptialName = res.data.data.hoptialName;
            this.checkupDate = res.data.data.checkupDate;
            this.checkupAdress = res.data.data.checkupAdress;
            callback();
          }else{
            this.empty = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

