<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(v ,i) in bannerList' :key="v.id">
        <img :src="v.imgUrl" />
      </div>
      <!-- <div class="swiper-slide">
        <img src="../../assets/04.png" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/04.png" />
      </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>

</template>

<script>
import 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

export default {
  props: {
    bannerList: {
      type: Array,
      default () { return []; },
    },
  },

  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
    };
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted () {
    new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      // mousewheel: true, //滚轮
      autoplay: { // 自动开始
        delay: 2000, // 时间间隔
        disableOnInteraction: false, //* 手动操作轮播图后不会暂停*
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // 分页器可以点击
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },
};
</script>

  <style>
.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  height: 500px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
