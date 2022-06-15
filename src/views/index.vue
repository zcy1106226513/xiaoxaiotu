<template>
  <div class="home">

    <!-- 内容区域 -->
    <div class="">
      <!-- 导航栏 -->

      <!-- 轮播图 -->
      <Scree :bannerList="bannerList" :navList="$store.state.navStoreList"></Scree>
      <!-- 新鲜好物 -->
      <Fresh></Fresh>
      <!-- 商品详情 -->
      <Product :newList="newList"></Product>
      <!-- 居家 -->
      <HomeDown></HomeDown>

    </div>

  </div>
</template>

<script>
import { getBanner, getNew } from '@/api/Nav.js';
import Scree from './Scree/Scree.vue';
import Fresh from './Fresh/Fresh.vue';
import Product from './Product/Product.vue';
import HomeDown from './HomeDown/HomeDone.vue';

export default {
  name: 'HomeVindeiew',
  components: {

    Scree,
    Fresh,
    Product,
    HomeDown,
  },
  data () {
    return {
      // 轮播图数据
      bannerList: [],
      // 新鲜好物数据
      newList: [],
    };
  },
  methods: {
    async getBanner () {
      const { result } = await getBanner();
      console.log(result);
      this.bannerList = result;
    },
    async getNew () {
      const res = await getNew();
      this.newList = res.result;
      console.log(this.newList);
    },

  },
  created () {
    // 获取新鲜好物数据
    this.getNew();
    // 获取轮播图数据
    this.getBanner();
    // 调用导航栏存储在store中的数据
    this.$store.dispatch('getNav');
  },

};
</script>
<style scoped>
.home {
  background-color: #f5f5f5;
}
.main {
  width: 1240px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
