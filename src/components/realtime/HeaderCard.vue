<template>
  <div class="header">
   <div class="divSw">
      <i-switch class="cell" i-class="swEqu" :value="switchEqu" size="small" @change="onSwEqu" slot="footer">
        <view slot="open">开</view>
        <view slot="close">关</view>
      </i-switch>
   </div>
    <div class="swEquName cell">均衡开关</div>
    <div class="gap cell"></div>
    <div class="status cell">均衡关闭</div>
  </div>
</template>

<script>
export default {
  props: ['switchEqu'],
  methods: {
    onSwEqu (event) {
      // TEST
      this.switchEqu = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  height: 30px;
  background: #484848;
  color: #fff;
  display: flex;
  justify-content: center;
  .divSw {
    display: flex;
  }
  .cell {
    margin: auto 6rpx;
  }
  .gap {
    width: 2rpx;
    height: 70%;
    background-color: #578953;
  }
}

</style>
