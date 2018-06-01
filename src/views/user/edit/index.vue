<template>
  <div class="edit-container">
    <div class="edit-list">
      <input type="file" accept="image/*" name="file" @change="selectFile" />
      <p>修改头像</p>
      <p>
        <img :src="userAvatar?userAvatar:'./static/images/avatar.png'">
        <img src="../../../static/images/icon_wsq@2x.png">
      </p>
    </div>
    <div class="edit-list" @click="handleEdit">
      <p>昵称</p>
      <p>
        <span>{{nickName}}</span>
        <img src="../../../static/images/icon_wsq@2x.png">
      </p>
    </div>
    <!-- <div class="edit-confirm">
      <div class="confirm-box">
        <p>修改昵称</p>
        <div class="change-name">
          <input type="text">
        </div>
        <div>
          <button>确认</button>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
.edit-container {
  padding-left: 0.4rem;
  padding-right: 0.3rem;
  .edit-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    height: 1.08rem;
    border-bottom: 1px solid #e7eaf1;
    position: relative;
    p {
      display: flex;
      align-items: center;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    img {
      width: 0.6rem;
      height: 0.6rem;
      &:nth-child(1) {
        border-radius: 50%;
      }
    }
  }
  .edit-confirm {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .confirm-box {
      padding-top: 1rem;
      width: 5.4rem;
      background: #fff;
      border-radius: 0.1rem;
      p {
        padding-left: 0.5rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: $fc-black;
      }
      .change-name {
        margin-top: 0.5rem;
        padding: 0.3rem 0.5rem;
        height: 0.9rem;
        input {
          font-size: 0.3rem;
          line-height: 0.3rem;
          height: 0.3rem;
          border-bottom: 1px solid #e7eaf1;
        }
      }
    }
  }
}
</style>
<script>
import { getCookie, setCookie } from "@/utils/tools";
export default {
  name: "UserEdit",
  data() {
    return {
      nickName: "",
      userAvatar: null,
      avatarSrc: ""
    };
  },
  methods: {
    getInfo() {
      this.$http.get("/personal/query/").then(res => {
        if (res.data.rc === 0) {
          this.userAvatar = res.data.data.avatar;
          this.nickName = res.data.data.nickName;
        } else {
          this.$toast({
            message: res.data.msg
          });
        }
      });
    },
    handleNumber(number) {
      return number.slice(0, 3) + "****" + number.slice(7);
    },
    handleEdit() {
      this.$prompt({
        title: "修改昵称",
        message: `<input type='text' id="editNickNameValue" maxlength="15" value='${this
          .nickName}' style='width:100%;height:30px;font-size:15px;line-heihgt:30px;'>`,
        successText: "确认",
        failText: "取消"
      }).then(() => {
        console.log(document.getElementById("editNickNameValue").value);
        var newNickName = document.getElementById("editNickNameValue").value;
        this.$http
          .put("personal/user/profile/", {
            nickName: newNickName
          })
          .then(res => {
            console.log(res);
            if (res.data.rc === 0) {
              this.getInfo();
              setCookie("nickName", newNickName);
              this.$toast({ message: "修改成功" });
            } else {
              this.$toast({ message: res.data.msg });
            }
          });
      });
    },
    /* 头像上传 */
    selectFile(e) {
      var file = e.target.files[0];
      if (!file || !window.FileReader) {
        return;
      }
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        let self = this;
        reader.onloadend = function() {
          self.avatarSrc = this.result;
        };
        this.handleUpload(file);
      } else {
        this.loading = false;
        this.$message.error("请上传图片");
      }
    },
    handleUpload(file) {
      //获取上传文件的token及相关配置参数
      var loading = this.$toast({
        type: "loading",
        duration: 0,
        message: "正在修改"
      });
      new Promise((resolve, reject) => {
        this.$http
          .get("http://file.testapi2.healthydoc.com.cn/file/upToken", {
            params: {
              isPrivate: 1
            }
          })
          .then(res => {
            var formData = new FormData();
            formData.append("file", file);
            formData.append("token", res.data.data.upToken);
            formData.append("x:bucketId", res.data.data.bucketId);
            formData.append("x:supplierId", res.data.data.supplierId);
            formData.append("x:isPrivate", res.data.data.isPrivate);
            formData.append("x:oWnerId", res.data.data.oWnerId);
            formData.append("x:systemId", res.data.data.systemId);
            formData.append("x:uploaderId", res.data.data.uploaderId);
            //进行文件上传获取文件id
            this.$http
              .post("http://" + res.data.data.uploadDomain, formData, {
                headers: { "Content-Type": "multipart/form-data" }
              })
              .then(res => {
                this.loading = false;
                if (res.data.rc === 0) {
                  console.log(res.data.data);
                  resolve(res.data.data.fileId);
                } else {
                  this.$message.error(res.data.msg);
                }
              })
              .catch(error => {
                console.log("上传错误，请重新上传！");
              });
          });
      }).then(fileId => {
        //进行头像修改的上传
        this.$http
          .post("/personal/upload/avatar/", {
            avatar: fileId
          })
          .then(res => {
            loading.close();
            if (res.data.rc === 0) {
              this.$toast({
                message: "修改成功"
              });
              this.getInfo();
            } else {
              this.$toast({
                message: res.data.msg
              });
            }
          }).catch(err=>{
            loading.close();
          })
      });
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>
