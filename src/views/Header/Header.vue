<template>
  <div class="div">
    <div class="header">
      <div class="box">
        <span>xiaotuxian001</span>|
        <span>退出登录</span>|
        <span>我的订单</span>|
        <span>会员中心</span>|
        <span>帮助中心</span>|
        <span>关于我们</span>|
        <span>手机版</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang ="scss" scoped>
.div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  color: azure;
  /* position: relative; */
}
.box {
  padding: 0 70px;
  span {
    margin-right: 10px;
  }
}
</style>
