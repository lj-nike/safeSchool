<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">校园巡检系统</div>
      <div class="form-wrapper">
        <input
          type="text"
          name="username"
          v-model="username"
          placeholder="账号"
          class="input-item"
        />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="密码"
          class="input-item"
          @keyup.enter="jude"
        />
        <!-- <input class="btn" type="button" @click="jude" @keyup.enter="jude" /> -->
        <div class="btn" @click="jude" @keydown="jude">登陆</div>
      </div>
      <div class="msg">
        有账户吗?
        <a href="/sign">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    jude() {
      if (this.username === "liaojie" && this.password === "1234") {
        this.$router.push({ path: "Dashborad" })
      } else {
        alert("账号密码错误")
      }
    },
  },
  mounted() {},
  created() {},
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
}
.login-wrapper {
  background-color: #fff;
  backdrop-filter: blur(20px);
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* .login-wrapper:before {
  content: “ ”;
  background: inherit;
  box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
  filter: blur(10px);
} */
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #acb6e5, #74ebd5);
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
