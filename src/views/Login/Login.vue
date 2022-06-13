<template>
  <div>
    <header class="login-header">
      <!-- 头部 -->
      <div class="container">
        <!-- 头像 -->
        <h1 class="logo">
          <img src="@/assets/logo.0940ebb5.png">
        </h1>
        <!-- 欢迎登录 -->
        <h3 class="sub">欢迎登录</h3>
        <!-- 进入网站首页 -->
        <a>进入网站首页</a>
      </div>
    </header>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.login-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 132px;
  background-color: pink;
  .logo {
    width: 200px;
    height: 100%;
    background-color: blue;
    img {
      margin-top: 20px;
      min-width: 100%;
      max-width: 100%;
    }
    // .sub {
    //
  }
  .sub {
    box-sizing: border-box;
    width: 900px;
    height: 60px;
    background-color: antiquewhite;
    font-size: 30px;
    padding-top: 25px;
    line-height: 100%;
  }
}
</style>
