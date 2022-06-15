<template>
  <div>
    <Bar></Bar>
    <Swiper :bannerList="bannerList"></Swiper>
    <AllCate></AllCate>
    <WineSet></WineSet>
    <WineSet></WineSet>
  </div>

</template>

<script>
import { getBanner } from '@/api/Nav.js';
import Bar from '@/components/Bar/bar.vue';
import Swiper from '@/components/Swiper/Swiper.vue';
import AllCate from '@/components/AllCate/AllCate.vue';
import WineSet from '@/components/WineSet/WineSet.vue';

export default {
  name: 'Cate',
  components: {
    Bar,
    Swiper,
    AllCate,
    WineSet,
  },
  data () {
    return {
      bannerList: [],
    };
  },
  methods: {
    async getBanner () {
      const { result, res } = await getBanner();
      console.log(result);
      this.bannerList = result;
    },

  },
  created () {
    this.getBanner();
  },

};
</script>

<style>
</style>
