<template>
  <div class="home">
    <div>
      <!-- 头部标题栏 -->
      <Header></Header>

    </div>
    <!-- 内容区域 -->
    <div class="main">
      <!-- 导航栏 -->
      <Nav></Nav>
      <!-- 轮播图 -->
      <Scree></Scree>
      <!-- 新鲜好物 -->
      <Fresh></Fresh>
      <!-- 商品详情 -->
      <Product></Product>
      <!-- 居家 -->
      <HomeDown></HomeDown>
      <!-- 底部栏 -->
      <Footer></Footer>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from './Header/Header.vue';
import Nav from './Nav/Nav.vue';
import Scree from './Scree/Scree.vue';
import Fresh from './Fresh/Fresh.vue';
import Product from './Product/Product.vue';
import HomeDown from './HomeDown/HomeDone.vue';
import Footer from './Footer/Footer.vue';
import Login from './Login/Login.vue';

export default {
  name: 'HomeVindeiew',
  components: {
    Header,
    Nav,
    Scree,
    Fresh,
    Product,
    HomeDown,
    Footer,
    Footer,
    Login,
  },
};
</script>
<style scoped>
.main {
  width: 1240px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
