<template>
  <div class="footer">
    <div class="container">
      <dl>
        <dt>客户服务</dt>
        <dd>
          <i class="iconfont">&#xe613;</i>
          <p>在线客服</p>
        </dd>
        <dd>
          <i class="iconfont">&#xe66c;</i>
          <p>问题反馈</p>
        </dd>
      </dl>
      <dl>
        <dt>关注我们</dt>
        <dd>
          <i class="iconfont">&#xe63f;</i>
          <p>在线客服</p>
        </dd>
        <dd>
          <i class="iconfont">&#xe65a;</i>
          <p>问题反馈</p>
        </dd>

      </dl>
      <dl>
        <dt>关注我们</dt>
        <dd>
          <i class="iconfont">&#xe66a;</i>
          <p>在线客服</p>
        </dd>
        <dd>
          <i class="iconfont">&#xe62a;</i>
          <p>问题反馈</p>
        </dd>

      </dl>
      <dl>
        <dt>关注我们</dt>
        <dd>
          <i class="iconfont">&#xe65a;</i>
          <p>在线客服</p>
        </dd>
        <dd>
          <i class="iconfont">&#xe66c;</i>
          <p>问题反馈</p>
        </dd>

      </dl>
    </div>
    <div class="footed"></div>

  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 290px;
  background-color: #ffffff;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1240px;
    height: 290px;
    // background-color: pink;
    padding: 60px 0 40px 100px;
    dl:nth-child(1) {
      width: 269px;
      height: 190px;
      // background-color: aqua;
      padding: 0 72px;
      dt {
        text-align: center;
        width: 196px;
        height: 18px;
        line-height: 1;
        font-size: 18px;
      }
      dd {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 6px;
        margin-top: 45px;
        float: left;
        width: 92px;
        height: 92px;
        // background-color: red;
        i {
          font-size: 50px;
          color: #686868;
          &:hover {
            color: #27bb9b;
          }
        }
        p {
          padding: 5px 0;
        }
      }
    }
    dl:nth-child(2) {
      width: 341px;
      height: 190px;
      // background-color: aqua;
      padding: 0 72px;
      dt {
        text-align: center;
        width: 196px;
        height: 18px;
        line-height: 1;
        font-size: 18px;
      }
      dd {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 6px;
        margin-top: 45px;
        float: left;
        width: 92px;
        height: 92px;
        // background-color: red;
        i {
          font-size: 50px;
          color: #686868;
          &:hover {
            color: #27bb9b;
          }
        }
        p {
          padding: 5px 0;
        }
      }
    }
    dl:nth-child(3) {
      width: 355px;
      height: 190px;
      // background-color: aqua;
      padding: 0 72px;
      dt {
        text-align: center;
        width: 196px;
        height: 18px;
      }
      dd {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 6px;
        margin-top: 45px;
        float: left;
        width: 92px;
        height: 92px;
        // background-color: red;
        i {
          font-size: 50px;
          color: #686868;
          &:hover {
            color: #27bb9b;
          }
        }
        p {
          padding: 5px 0;
        }
      }
    }
    dl:nth-child(4) {
      width: 226px;
      height: 190px;
      // background-color: aqua;
      dt {
        text-align: center;
        width: 196px;
        height: 18px;
      }
      dd {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 6px;
        margin-top: 45px;
        float: left;
        width: 92px;
        height: 92px;
        // background-color: red;
        i {
          font-size: 50px;
          color: #686868;
          &:hover {
            color: #27bb9b;
          }
        }
        p {
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
