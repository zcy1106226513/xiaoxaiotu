<template>
  <div>
    <div class="product">
      <ul class="product-ul">
        <li v-for="(item,index) in newList" :key="index">
          <div class="product-li">
            <img :src="item.picture">
          </div>
          <div class="product-describe">
            <p class="name">{{item.name}}</p>
          </div>
          <div class="product-price">
            <p>{{item.price}}</p>
          </div>
        </li>
        <!-- <li>
          <div class="product-li">
            <img src="../../assets/01.png">
          </div>
          <div class="product-describe">
            <p>事事圆满缅甸天然翡翠手链</p>
          </div>
          <div class="product-price">
            <p>￥429.00</p>
          </div>
        </li>
        <li>
          <div class="product-li">
            <img src="../../assets/01.png">
          </div>
          <div class="product-describe">
            <p>事事圆满缅甸天然翡翠手链</p>
          </div>
          <div class="product-price">
            <p>￥429.00</p>
          </div>
        </li>
        <li>
          <div class="product-li">
            <img src="../../assets/01.png">
          </div>
          <div class="product-describe">
            <p>事事圆满缅甸天然翡翠手链</p>
          </div>
          <div class="product-price">
            <p>￥429.00</p>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newList: {
      type: Array,
      default () { return []; },
    },
  },

};
</script>

<style  lang ="scss" scoped>
.product {
  width: 1240px;
  height: 426px;

  .product-ul {
    display: flex;
    justify-content: center;
    align-items: space-around;
    width: 1240px;
    height: 406px;
  }
  li {
    margin-right: 5px;
    width: 306px;
    height: 406px;

    .product-li {
      width: 306px;
      height: 306px;
      background-color: red;
      img {
        min-width: 100%;
        max-height: 100%;
      }
    }
    .product-describe {
      box-sizing: border-box;
      width: 306px;
      height: 42px;

      p {
        text-align: center;
        font-size: 22px;
        padding: 9px 27px;
        white-space: nowrap;
        color: #333;
      }
    }
    .product-price {
      width: 306px;
      height: 42px;

      p {
        text-align: center;
        line-height: 42px;
        color: red;
      }
    }
  }
}
</style>
