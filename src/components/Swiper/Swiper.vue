<template>
  <!-- Swiper -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img :src="require('@/assets/04.png')" alt=""></div>
      <div class="swiper-slide"><img :src="require('@/assets/05.png')" alt=""></div>
      <div class="swiper-slide"><img :src="require('@/assets/01.png')" alt=""></div>
      <div class="swiper-slide"><img :src="require('@/assets/04.png')" alt=""></div>
      <div class="swiper-slide"><img :src="require('@/assets/04.png')" alt=""></div>

    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

</template>

  <!-- Initialize Swiper -->
<script>
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// const swiper = new Swiper();
export default {
  components: {
    Swiper,
    // SwiperSlide,
  },
  mounted () {
    new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },

};

</script>

  <!-- Demo styles -->
  <style>
.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
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
