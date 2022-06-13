<template>
  <div>
    <!-- 轮播图 -->
    <div class="scree">
      <div class="swiper-big">
        <Swiper></Swiper>
      </div>
      <!-- 菜单目录 -->
      <ul class="menu">
        <li v-for="(v,i) in 10" :key="v" @mouseenter="isShow = true;current=i" @mouseleave="isShow = false" :style="{'backgroundColor':isShow&&current ==i?'#27ba9b':''}">
          <a>居家</a>
          <a>茶咖酒具</a>
          <a>水具杯壶</a>
        </li>
      </ul>
      <!-- 详细菜单 -->
      <div class="layer is-show" v-show="isShow">
        <!-- 标题 -->
        <div class="layer-title">
          <h4>分类推荐</h4>
          <span>根据您的购买或浏览记录推荐</span>
        </div>
        <!-- 每一项 -->
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>
        <div class="layer-every">
          <!-- 图片 -->
          <div class="layer-img">
            <img src="../../assets/05.png" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>两带式软木拖鞋</p>
            <p>鞋杯随脚型而变,舒适呵护</p>
            <p>￥49.00</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Swiper from '@/components/Swiper/Swiper.vue';

export default {
  components: {
    Swiper,
  },
  data () {
    return {
      isShow: false,
      current: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.scree {
  position: relative;
  width: 1240px;
  height: 500px;
  // background-color: pink;
  .swiper-big {
    width: 100%;
    height: 100%;
  }
  .menu {
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0;
    width: 250px;
    height: 500px;
    background-color: rgb(0, 0, 0, 0.7);
    li {
      width: 250px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      a:nth-child(1) {
        font-size: 20px;
        color: #fff;
      }
      a:nth-child(2) {
        color: #fff;
        padding-left: 5px;
      }
      a:nth-child(3) {
        color: #fff;
        padding-left: 5px;
      }
      // &:hover {
      //   background-color: #27ba9b;
      // }
    }

    // 显示与影藏效果
  }
  .layer {
    width: 990px;
    height: 500px;
    position: absolute;
    left: 250px;
    top: 0;
    z-index: 10;
    background-color: #85898a;
    // display: none;

    .layer-title {
      font-size: 18px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 75px;
      // background-color: purple;
      span {
        padding-left: 5px;
        font-size: 16px;
        color: #666;
      }
    }
    .layer-every {
      float: left;
      width: 315px;
      height: 120px;
      margin: 0 13px 15px 0;
      // border: 1px solid red;
      // background-color: green;
      background-color: #fff;
      display: flex;

      .layer-img {
        display: inline-block;
        width: 100px;
        height: 100px;
        // background-color: #666;
        margin: 10px 0 0 10px;
      }
      .layer-state {
        width: 200px;
        height: 100px;
        // background-color: aqua;
        margin-top: 10px;
        padding-left: 10px;
        p {
          margin-bottom: 10px;
        }
        p:nth-child(1) {
          font-size: 20px;
        }
        p:nth-child(2) {
          font-size: 10px;
          color: #fff;
        }
        p:nth-child(3) {
          font-size: 20px;
          color: red;
        }
      }
    }
  }
}
</style>
