<template>
  <div>
    <div class="home-down">
      <h1 class="home-title">居家</h1>
      <div class="home-btw">
        <a>茶咖酒具</a>
        <a>水具杯壶</a>
        <a>宠物食品</a>
        <a>宠物用品</a>

      </div>
      <span class="more">查看全部</span>
    </div>
    <div class="home-detail">
      <p class="big-img">
        <img src="../../assets/02.jpg" alt="">
      </p>
      <div class="small-img">
        <ul>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>
          <li>
            <a>
              <img src="../../assets/03.jpg" alt="">
            </a>
            <p class="top">智能宠物喂食器mini</p>
            <p class="middle">双重锁鲜，科学喂养，远程操控</p>
            <p class="price">¥469.00</p>
          </li>

        </ul>

      </div>

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.home-down {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 115px;

  .home-title {
    width: 720px;
    height: 35px;
  }
  .home-btw {
    width: 432px;
    height: 22px;

    a {
      float: left;
      margin-left: 15px;
      font-size: 16px;
    }
    .more {
      color: #333;
    }
  }
}
.home-detail {
  overflow: hidden;
  position: relative;
  width: 1240px;
  height: 610px;

  .big-img {
    float: left;
    width: 240px;
    height: 610px;
    padding-right: 10px;

    img {
      min-width: 100%;
      max-width: 100%;
    }
  }
  .small-img {
    float: right;

    width: 990px;
    height: 610px;

    img {
      min-width: 100%;
      max-width: 100%;
    }
    ul {
      overflow: hidden;
    }
    ul li {
      margin: 0 7px 5px 0;
      float: left;
      width: 240px;
      height: 300px;

      a {
        display: block;
        margin: 0 auto;
        width: 160px;
        height: 160px;
      }
      .top {
        box-sizing: border-box;
        width: 178px;
        height: 44px;
        border: 1px solid white;
        margin-left: 30px;
        padding-top: 10px;
      }
      .middle {
        width: 178px;
        height: 22px;
        border: 1px solid white;
        margin-left: 30px;
        padding-top: 10px;
        color: #666;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .price {
        width: 178px;
        height: 28px;
        border: 1px solid white;
        margin-left: 30px;
        margin-top: 10px;
        color: red;
        font-size: 20px;
      }
    }
  }
}
</style>
