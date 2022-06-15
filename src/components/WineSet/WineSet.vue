<template>
  <div class="box">
    <div class="header">
      <h3>-茶咖酒具-</h3>
      <p>温暖柔软，品质之选</p>
      <span>查看全部</span>
    </div>
    <div class="footer">
      <ul class="goods">

        <li>
          <img src='../../assets/06.jpg' />
          <p>梨皮朱泥三绝清代小品壶经典款紫砂壶</p>
          <p>风靡南国的朱泥小壶，茶座上必备的实用“奢侈品”</p>
          <p>¥780.00</p>
        </li>
        <li>
          <img src='../../assets/06.jpg' />
          <p>梨皮朱泥三绝清代小品壶经典款紫砂壶</p>
          <p>风靡南国的朱泥小壶，茶座上必备的实用“奢侈品”</p>
          <p>¥780.00</p>
        </li>
        <li>
          <img src='../../assets/06.jpg' />
          <p>梨皮朱泥三绝清代小品壶经典款紫砂壶</p>
          <p>风靡南国的朱泥小壶，茶座上必备的实用“奢侈品”</p>
          <p>¥780.00</p>
        </li>
        <li>
          <img src='../../assets/06.jpg' />
          <p>梨皮朱泥三绝清代小品壶经典款紫砂壶</p>
          <p>风靡南国的朱泥小壶，茶座上必备的实用“奢侈品”</p>
          <p>¥780.00</p>
        </li>
        <li>
          <img src='../../assets/06.jpg' />
          <p>梨皮朱泥三绝清代小品壶经典款紫砂壶</p>
          <p>风靡南国的朱泥小壶，茶座上必备的实用“奢侈品”</p>
          <p>¥780.00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.box {
  width: 1240px;
  height: 457px;
  background-color: #fff;
  margin-bottom: 20px;
  .header {
    width: 100%;
    height: 128px;
    // border: 1px solid red;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h3 {
      font-size: 28px;
      color: #666;
      font-weight: 400;
      text-align: center;
      line-height: 100px;
    }
    p {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
    span {
      position: absolute;
      right: 30px;
      top: 20px;
    }
  }
  .goods {
    box-sizing: border-box;
    width: 100%;
    height: 329.39px;
    // background-color: red;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
    // border: 1px solid red;
    li {
      width: 20%;
      box-sizing: border-box;
      height: 100%;
      // border: 1px solid blue;
      // display: block;
      // width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all 0.5s;
      & p:nth-child(2) {
        font-size: 16px;
      }
      & p:nth-child(3) {
        color: #999;
        height: 29px;
        font-size: 14px;
      }
      & p:nth-child(4) {
        color: #cf4444;
        font-size: 20px;
      }
      img {
        width: 160px;
        height: 160px;
      }
    }
  }
}
</style>
