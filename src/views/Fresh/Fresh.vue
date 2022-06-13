<template>
  <div>
    <div class="fresh">
      <div class="home-panel">
        <span class="fresh-mall">新鲜好物</span>
        <div class="fresh-come">
          <span>新鲜出炉</span>
          <span class="fresh-right">品质靠谱</span>
        </div>
      </div>
      <div class="more">查看全部</div>
    </div>
  </div>

</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.fresh {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 115px;
}
.home-panel {
  width: 1152px;
  height: 35px;

  .fresh-mall {
    font-size: 32px;
    font-weight: 400;
    margin-left: 6px;
    line-height: 35px;
  }
  .fresh-come {
    display: inline;
    width: 132px;
    height: 21px;
    font-size: 16px;
    color: #999;
    margin-left: 20px;
    .fresh-right {
      margin-left: 5px;
    }
  }
}
.more {
  width: 82px;
  height: 22px;
}
</style>
