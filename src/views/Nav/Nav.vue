<template>
  <div class="nav-app">
    <!-- 导航栏 -->
    <div class="nav-header">
      <!-- 头像 -->
      <div class="logo">
        <div class="page"></div>
      </div>
      <!-- 中间列表 -->
      <div class="app-header">
        <ul class="app-header-nav">
          <li v-for="(v,i) in 10" :key="v" @mouseenter="isShow=true;current=i" @mouseleave="isShow=false" :style="{'border-bottom':isShow&&current==i?'1px solid blue':''}">首页</li>
          <!-- <li>居家</li>
          <li>美食</li>
          <li>服饰</li>
          <li>母婴</li>
          <li>个护</li>
          <li>严选</li>
          <li>数码</li>
          <li>运动</li>
          <li>杂项</li> -->

        </ul>
      </div>
      <!-- 搜索框 -->
      <div class=" search">
        <div class="search-icon">
          <span class="iconfont">&#xe600;</span>
          <input type="text" placeholder="搜一搜">
        </div>
      </div>
      <!-- 购物车小图标 -->
      <div class="cart">
        <div class="icon-mart">
          <span class="iconfont">&#xe70b;</span>
        </div>
      </div>

    </div>
    <!-- 导航栏弹窗 -->
    <div class="popup " v-show="isShow">
      <div class="nav-popup">
        <div class="nav-every" v-for="(v ,i) in 4" :key="v">
          <div class=" nav-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <sapn class="nav-des">茶壶酒具</sapn>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      current: 0,
    };
  },

};
</script>

<style lang ="scss" scoped>
.nav-app {
  position: relative;
}
.nav-header {
  display: flex;
  margin: 0 auto;
  /* height: 132px; */
  position: relative;
}
.logo {
  /* width: 100%; */
  width: 200px;

  .page {
    height: 132px;
    background: url(../../assets/logo.0940ebb5.png) no-repeat;
    background-size: contain;
    background-position: 0 20px;
  }
}
.app-header {
  width: 820px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .app-header-nav {
    padding: 45px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      /* padding: 5px 23px; */
      margin: 0 22px;
      width: 32px;
      height: 32px;
      justify-items: center;
      align-items: center;
      line-height: 32px;
    }
  }
}
.search {
  position: relative;
  box-sizing: border-box;
  width: 170px;
  height: 31px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .iconfont {
    position: absolute;
    top: 3px;
    left: 3px;
  }
  input {
    padding-left: 25px;
    width: 100%;
    height: 28px;
    border: none;
    box-sizing: border-box;
    color: #666;
    outline: none;
    border-bottom: 1px solid #d0d0d0;
  }
}
.cart {
  width: 30px;

  /* position: absolute; */
  /* top: 3px;
  right: 3px;  */
  .icon-mart {
    margin-top: 55px;
  }
}
input::-webkit-input-placeholder {
  color: #d0d0d0;
}
.popup {
  position: absolute;
  bottom: -71px;
  left: 0;
  width: 1240px;
  height: 100px;
  z-index: 100;
  background-color: #fff;
  .nav-popup {
    width: 100%;
    height: 100%;
    margin-left: 50px;
    /* background-color: blue; */
  }
  .nav-every {
    float: left;
    width: 100px;
    height: 100px;
    /* background-color: purple; */
    margin-right: 10px;
    .nav-img {
      margin-left: 10px;
      width: 100%;
      height: 80px;
    }
    .nav-des {
      margin-left: 20px;
      font-size: 7px;
    }
  }
}
</style>
