<template>
  <div class="cellsVolt">
    <div class="caption">
      <div class="title">单体电压</div>
    </div>
    <div class="content">
      <div class="cells" v-for="(value, i) in values" :key="i">
          <CellValueCard :index="i" :value="value" unit="V"></CellValueCard>
      </div>
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

.cellsVolt {
  background-color: #3a3a3a;
  color: #fff;
  .caption {
    background-color: #38383e;
    color: #93bbe4;
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
    height: 384rpx;
  }
}

</style>
