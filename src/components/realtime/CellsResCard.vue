<template>
  <div class="cellsRes">
    <div class="caption">
      <div class="title">均衡线电阻</div>
    </div>
    <div class="content">
      <CellValueCard v-for="(value, i) in values" :key="i" :index="i" :value="value" unit="Ω"></CellValueCard>
    </div>
  </div>
</template>

<script>
import CellValueCard from './CellValueCard'

export default {
  components: {
    CellValueCard
  },
  props: ['values']
}
</script>

<style lang="scss" scoped>

.cellsRes {
  background-color: #3a3a3a;
  color: #fff;
  .caption {
    background-color: #38383e;
    color: #a2cefa;
    width: 100%;
    height: 1.5em;
    display: flex;
    .title {
      margin: auto;
    }
  }
  .content {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 432rpx;
  }
}

</style>
