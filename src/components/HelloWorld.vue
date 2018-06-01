<template>
  <div class="helloWolrd_container">
    <ul @click="handleClick">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <button @click="handleAlert">打开alert弹窗</button>
    <button @click="handleConfirm">打开confirm弹窗</button>
    <button @click="handleToast1">打开toast纯文本</button>
    <button @click="handleToast2">打开toast加载</button>
    <button @click="closeToast">关闭Toast</button>    
    <button @click="handleToast3">打开toast成功</button>
  </div>
</template>
<style>
button{
  font-size: 14px;
}
</style>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      toast: null
    };
  },
  methods: {
    handleClick(ev) {
      ev = ev || window.event;
      var target = ev.target || ev.srcElement;
      if (target.nodeName.toLowerCase() == "li") {
        console.log(target.innerHTML);
      }
    },
    handleAlert(){
      /**
       * @param string 提示内容
       * @param string 按钮文案
       * @returns function 返回Promise对象实例 点击确定之后的方法写在then函数中
       * 
       */
      this.$alert('提示消息','确定').then(()=>{
        console.log('点击确定')
      })
    },
    handleConfirm(){
        /**
         * @param string 提示内容
         * @param object param cancelButtonText string 左边取消按钮文案
         * @param object param confirmButtonText string 左边确定按钮文案
         * @returns function 返回Promise对象实例 点击确定之后的方法写在then函数中,点击取消之后的方法写在catch函数中
         */
        this.$confirm('确认删除该成员？',{
          cancelButtonText: 'cancel',
          confirmButtonText: 'confirm'
        }).then(()=>{
          console.log('确定按钮')
        }).catch(()=>{
          console.log('取消按钮')
        })
    },
    /**
     * @param object [type] string [text,loading,success] text:纯文本 loading: 带加载iconToast success: 带成功iconToast
     * @param string [message] 提示消息内容
     * @param boolean [shadow] 是否显示遮照层
     * @param string [position] [center,bottom]默认取center，位于中间，bottom位于底部
     * @param number [duration] 显示时间 如果小于等于0 则一直显示不关闭  默认2s
     * @param boolean [] 自身toast的实例 有close方法，创建一个实例之后调用close方法关闭当前的toast实例
     */
    handleToast1(){
      this.$toast({
        type: 'text',
        position: 'bottom',
        message: '这个是一段纯文本，测试长度的最大值，制动换行',
        duration: 0
      })
    },
    handleToast2(){
      this.$toast({
        type: 'loading',
        message: '正在发送',
        shadow: true,
        duration: 3000
      })
    },
    closeToast(){
      this.toast.close()
    },
    handleToast3(){
      this.toast = this.$toast({
        type: 'success',
        message: '已完成!',
        duration: 30000
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$color: red;
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 1rem;
  height: 50px;
  border: 1px solid $color;
}
a {
  color: #42b983;
}
.helloWolrd_container button{
  width: 5rem;
  // height: 0.5rem;
  height: 20px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
