<template>
  <div class="box">
    <span>首页</span>
    <span>></span>
    <span>居家</span>
  </div>
</template>

<script>
export default {

};
</script>

<style  lang="scss" scoped>
.box {
  color: #666;
  & span:nth-child(2) {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
