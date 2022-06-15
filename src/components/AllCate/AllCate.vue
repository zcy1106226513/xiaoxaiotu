<template>
  <div class="box">
    <div class="header">全部分类</div>
    <div class="footer">
      <ul class="goods">
        <li>
          <img :src="require ('@/assets/chahu.png')" />
          <p>茶咔酒具</p>
        </li>
        <li>
          <img :src="require ('@/assets/chahu.png')" />
          <p>茶咔酒具</p>
        </li>
        <li>
          <img :src="require ('@/assets/chahu.png')" />
          <p>茶咔酒具</p>
        </li>
        <li>
          <img :src="require ('@/assets/chahu.png')" />
          <p>茶咔酒具</p>
        </li>
        <li></li>
        <li></li>
        <li></li>
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
  height: 260px;
  background-color: #fff;
  margin-bottom: 20px;
  .header {
    height: 100px;
    // background-color: aqua;
    font-size: 28px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
  }
  .footer {
    height: 160px;
    // background-color: blueviolet;
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;
    min-height: 160px;
    .goods {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .goods li {
      width: 14.2%;
      height: 100%;
      // background-color: red;
      box-sizing: border-box;
      // border: 1px solid black;
      p {
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        width: 168px;
        height: 40px;
        // border: 1px solid black;
        box-sizing: border-box;
      }

      img {
        width: 100px;
        height: 100px;
        // border: 1px solid black;
        box-sizing: border-box;
        margin: 0 auto;
      }
    }
  }
}
</style>
