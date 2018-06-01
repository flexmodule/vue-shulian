<template>
  <div class="authResultShow-container">
    <div class="all-content">
      <h1>尊敬的{{company}}员工</h1>
      <p>您已预约成功！请在订单中查看。</p>
      <div class="toOrder" @click="$router.push('/order')">查看体检订单</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.authResultShow-container {
  width: 100%;
  height: 100%;
  .all-content {
    padding: 0.96rem 0.65rem 0 0.65rem;
    color: $fc-black;
    h1 {
      font-size: 0.4rem;
      line-height: .6rem;
    }
    p {
      font-size: 0.3rem;
      margin-top: 0.92rem;
    }
    .toOrder {
      margin-top: 2rem;
      width: 100%;
      height: 0.9rem;
      border-radius: 0.1rem;
      text-align: center;
      line-height: 0.9rem;
      color: #fff;
      font-size: 0.3rem;
      background-color: $blue;
    }
  }
  
}
</style>

<script>
import { getCookie } from '@/utils/tools'
export default {
  name: 'AuthResultShow',
  data () {
    return {
      company: ''
    }
  },
  created () {
    // this.company = getCookie('companyName')
    this.company = '啊都是看极乐寺盔甲电力负荷啊看接撒地方'
  }
}
</script>
