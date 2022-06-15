<template>
  <div>
    <!-- 轮播图 -->
    <div class="scree">
      <div class="swiper-big">

        <Swiper :bannerList="bannerList"></Swiper>
      </div>
      <!-- 菜单目录 -->
      <ul class="menu">
        <li v-for="(v,i) in navList" :key="i" @mouseenter="isShow = true;current=i" @mouseleave="isShow = false" :style="{'backgroundColor':isShow&&current ==i?'#27ba9b':''}">
          <a class="title">{{v.name}}</a>
          <a v-for="(item ,index) in v.children.slice(0,2)" :key="index" class="list">{{item.name}}</a>

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
        <div class="layer-every" v-for="(item,index) in navList[current]['goods']" :key="index">
          <!-- 图片 -->
          <div class="layer-img">
            <img :src="item.picture" alt="">
          </div>
          <!-- 详细描述 -->
          <div class="layer-state">
            <p>{{item.name}}</p>
            <p>{{item.desc}}</p>
            <p class="goods-price">{{item.price}}</p>
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
  props: {
    bannerList: {
      type: Array,
      default () { return []; },
    },
    navList: {
      type: Array,
      default () { return []; },
    },
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
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
    }
    .title {
      display: inline-block;
      box-sizing: border-box;
      font-size: 16px;
      margin-right: 4px;
      color: #fff;
    }
    .list {
      display: inline-block;
      box-sizing: border-box;
      margin-right: 4px;
      color: #fff;
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
        img {
          width: 100px;
        }
      }
      .layer-state {
        margin-left: 5px;
        width: 200px;
        height: 100px;
        // background-color: aqua;
        margin-top: 10px;
        // padding-left: 10px;
        .goods-price {
          color: red;
        }
      }
    }
  }
}
</style>
