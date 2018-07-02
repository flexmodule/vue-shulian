<template>
  <div class="home">
    <div class="address">
      <div class="logo">
        <img src="@/static/img/sllogo.jpg" alt="塾链教育">
      </div>
      <b>
        <i class="iconfont icon-map"></i>
        <span>{{currentPosition}}</span>
        <i class="iconfont icon-moreunfold"></i>
      </b>
    </div>
    <div class="search">
      <router-link tag="div" to="/search">
        <div class="search-input">
          <i class="iconfont icon-search"></i>
          <span>搜索</span>
        </div>
      </router-link>
    </div>
    <div class="swiperimg">
      <mt-swipe :auto="0">
        <mt-swipe-item><img src="https://res.shiguangkey.com/file/201804/28/20180428192020063086227.png!m_banner_a" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://res.shiguangkey.com/file/201804/24/20180424153552821566623.jpg!m_banner_a" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="newlist">
      <ul>
        <li>
          <a href="#">
            <i class="iconfont icon-remind"></i>
            <p>最新出品</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-video"></i>
            <p>热门资讯</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-clock"></i>
            <p>限时特惠</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="professionallist samelist">
      <h3><em>专业类目<span></span></em><i><a href="#">更多</a>></i></h3>
      <ul class="clearfix">
        <li>
          <a href="#">
            <i>息</i>
            <p>信息类</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>商</i>
            <p>商学院</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>语</i>
            <p>外国语</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>艺</i>
            <p>艺术类</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>师</i>
            <p>师范类</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>械</i>
            <p>机械类</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>法</i>
            <p>法学类</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>建</i>
            <p>建筑学</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="courselist samelist">
      <h3><em>线下培训机构<span>(根据职业搜索实体店)</span></em><i><a href="#">更多</a>></i></h3>
      <ul class="clearfix">
        <li>
          <a href="#">
            <i>IT</i>
            <p>IT.互联网</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>研</i>
            <p>考研</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>乐</i>
            <p>音乐乐器</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>证</i>
            <p>职业考证</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>言</i>
            <p>语言</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>趣</i>
            <p>兴趣生活</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>司</i>
            <p>公司管理</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>硬</i>
            <p>硬件开发</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="courselist samelist">
      <h3><em>在线视频课程<span></span></em><i><a href="#">更多</a>></i></h3>
      <ul class="clearfix">
        <li>
          <a href="#">
            <i>IT</i>
            <p>IT.互联网</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>研</i>
            <p>考研</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>乐</i>
            <p>音乐乐器</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>证</i>
            <p>职业考证</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>言</i>
            <p>语言</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>趣</i>
            <p>兴趣生活</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>司</i>
            <p>公司管理</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i>硬</i>
            <p>硬件开发</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="feature-use">
      <h3><em>新人指引<span></span></em><i><a href="#">更多</a>></i></h3>
      <div class="feature-use-main">
        <div class="profess">
          <dl>
            <dt>1.从专业入手</dt>
            <dd class="dd-btn">专业</dd>
            <dd class="dd-img"><img src="@/static/img/arrow.png" alt=""></dd>
            <dd class="dd-btn">专业在工作中对应的岗位</dd>
            <dd class="dd-img"><img src="@/static/img/arrow.png" alt=""></dd>
            <dd class="dd-btn">这个岗位需要的技能、技术和交流技巧</dd>
            <dd class="dd-img"><img src="@/static/img/arrow.png" alt=""></dd>
            <dd class="dd-btn">技能、技术课程(线上视频课程、线下团购课程)</dd>
          </dl>
        </div>
        <div class="group-purchase same-ddStyle">
          <dl>
            <dt>2.平台团购线下课程的好处</dt>
            <dd><i class="iconfont icon-rfq1"></i><span>在线试听课程，满意后可选择报名线下</span></dd>
            <dd><i class="iconfont icon-rfq1"></i><span>超长时间线下试听体验，不满意可退款</span></dd>
            <dd><i class="iconfont icon-rfq1"></i><span>塾链为用户学习提供保障，用户与合作培训机构争执，塾链有义务协商解决，保障用户最大化利益</span></dd>
            <dd><i class="iconfont icon-rfq1"></i><span>此外，团购课程，要比线下优惠哦</span></dd>
          </dl>
        </div>
        <div class="shulian-feature same-ddStyle">
          <dl>
            <dt>3.智能塾链先生的使用</dt>
            <dd><i class="iconfont icon-pin"></i><span>根据您输入的性格特征</span></dd>
            <dd><i class="iconfont icon-pin"></i><span>根据您输入的具备技能</span></dd>
            <dd><i class="iconfont icon-pin"></i><span>根据您输入的期待工作环境</span></dd>
            <dd><i class="iconfont icon-pin"></i><span>根据您输入的平均薪资水平</span></dd>
            <dd><i class="iconfont icon-pin"></i><span>根据以上，塾链先生会为你推送相应的工作岗位，以及相应的塾链介绍</span></dd>
          </dl>
        </div>
      </div>   
    </div>
    <div class="company-intro">
      <p>扬州塾链网络科技有限公司</p>
      <p>联系电话：18752782297</p>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import { getPosition } from "@/utils/tools";
export default {
  name: "Home",
   components: {
    Swipe,
    SwipeItem
  },
  data() {
      return {
        currentPosition: "阿里巴巴"
      }
    },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.home {
  .address {
    font-size: 0;
    padding: .2rem;
    background: #0af;
    display: flex;
    justify-content: space-between;
    .logo {
      width: .85rem;
      height: .42rem;
      img {
        width: 100%;
      }
    }
    b {
      font-style: normal;
      display: inline-block;
    }
    span {
      font: 700 .14rem/.4rem "";
      display: inline-block;
      margin: 0 .1rem;
      color: #fff;
    }
    i {
      font: 700 .3rem/.4rem "";
      color: #fff;
      width: .25rem;
      height: .4rem;
      display: inline-block;
    }
  }
  .search {
    background: #0af;
    padding: .15rem;
    text-align: center;
    .search-input {
      width: 6.94rem;
      height: .72rem;
      margin: 0 auto;
      background: #fff;
      color: #999;
      i,span {
        display: inline-block;
        font: .33rem/.72rem "";
      }
    }
  }
  .newlist {
    padding: .3rem 0;
    border-bottom: .01rem solid rgba(0,0,0,.2);
    ul {
      display: flex;
      justify-content: space-around;
      li {
        text-align: center;
        width: 1.5rem;
        &:nth-child(1) {
          a {
            i {
              background: #5cb2ff;
            }
          }
        }
        &:nth-child(2) {
          a {
            i {
              background: #84c636;
            }
          }
        }
        &:nth-child(3) {
          a {
            i {
              background: #ff616c;
            }
          }
        }
        a {
          i {
            border-radius: 50%;
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            font: 700 .5rem/1.2rem "";
            color: #fff;
          }
          p {
          margin-top: .1rem;
          color: #000;
          }
        }
      }
    }
  }
  .samelist {
    padding: .3rem 0;
    h3 {
      display: flex;
      justify-content: space-between;
      padding: 0 .1rem;
      em,i {
        font-style: normal;
        display: inline-block;
        font: 700 .32rem/.45rem "";
        span {
          font: .28rem/.36rem "";
        }
        a {
          color: #000;
        }
      }
      em {
        border-left: .07rem solid #0af;
        padding: 0 .1rem;
      }
    }
    ul {
      padding: .3rem;
      li {
        float: left;
        text-align: center;
        width: 1.5rem;
        margin: .2rem .2rem 0 0;
        &:nth-child(1) {
          a {
            i {
              background: #68ddf5;
            }
          }
        }
        &:nth-child(2) {
          a {
            i {
              background: #4dd2b0;
            }
          }
        }
        &:nth-child(3) {
          a {
            i {
              background: #a8d871;
            }
          }
        }
        &:nth-child(4) {
          a {
            i {
              background: #fdc948;
            }
          }
        }
        &:nth-child(5) {
          a {
            i {
              background: #62a7f6;
            }
          }
        }
        &:nth-child(6) {
          a {
            i {
              background: #f8755a;
            }
          }
        }
        &:nth-child(7) {
          a {
            i {
              background: #58d2ff;
            }
          }
        }
        &:nth-child(8) {
          a {
            i {
              background: #c0a7f6;
            }
          }
        }
        a {
          i {
            border-radius: 50%;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            font: 500 .5rem/1rem "";
            color: #fff;
            font-style: normal;
          }
          p {
          margin-top: .1rem;
          color: #000;
          }
        }
      }
    }
  }
  .feature-use {
    padding: .3rem 0;
    h3 {
      display: flex;
      justify-content: space-between;
      padding: 0 .1rem;
      em,i {
        font-style: normal;
        display: inline-block;
        font: 700 .32rem/.45rem "";
        span {
          font: .2rem/.32rem "";
        }
        a {
          color: #000;
        }
      }
      em {
        border-left: .07rem solid #0af;
        padding: 0 .1rem;
      }
    }
    .profess {
      padding: .1rem .1rem;
      dt {
        font: .35rem/.44rem "";
        padding: .1rem;
      }
      .dd-btn {
        text-align: center;
        border: .03rem dashed #4687fd;
        border-radius: .2rem;
        font: .32rem/.55rem "";
      }
      .dd-img {
        width: 1.08rem;
        height: 1.08rem;
        margin: .2rem auto;
        img {
          width: 100%;
        }
      }
    }
    .same-ddStyle {
      padding: .1rem .1rem;
      dt {
        font: .35rem/.44rem "";
        padding: .1rem;
      }
      dd {
        &:hover {
          color: red;
        }
        i {
          display: inline-block;
          margin-right: .2rem;
          color: #4687fd;
          vertical-align: top;
          font: .3rem/.46rem "";
        }
        span {
          font: .3rem/.46rem "";
          display: inline-block;
          width: 6.6rem;
        }
      }
    }
  }
  .company-intro {
    padding: .6rem;
    text-align: center;
    background: #f0f0f0;
    p {
      margin-top: .2rem;
    }
  }
  .swiperimg {
    height: 2.1rem;
  }
}
</style>
