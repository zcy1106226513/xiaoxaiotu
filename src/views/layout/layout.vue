<template>
  <div class="home">
    <div>
      <!-- 头部标题栏 -->
      <Header></Header>
      <!-- 导航栏 -->

    </div>
    <Nav @navLink="navLink" :navList="navList"></Nav>
    <!-- 内容区域 -->
    <div class="main">
      <router-view></router-view>
      <!-- 底部栏 -->

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { getNav } from '@/api/Nav';
import Header from '../Header/Header.vue';
import Nav from '../Nav/Nav.vue';
import Footer from '../Footer/Footer.vue';

export default {
  name: 'HomeVindeiew',
  components: {
    Header,
    Footer,
    Nav,

  },

  data () {
    return {
      navList: [],

    };
  },
  methods: {
    navLink (val) {
      this.$router.push({ name: 'category', params: { id: val } });
    },
    getNavList () {
      getNav().then((res) => {
        console.log(res);
        this.navList = res.result;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  created () {
    this.getNavList();
  },
};
</script>
<style scoped>
.main {
  width: 1240px;
  /* height: 100vh; */
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
