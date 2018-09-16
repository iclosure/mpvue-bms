<template>
  <div class="cellsVolt">
    <div class="caption">
      <div class="title">单体电压</div>
    </div>
    <div class="content">
      <div class="cells" v-for="(value, i) in values" :key="i">
          <CellVoltCard :index="i" :value="value"></CellVoltCard>
      </div>
    </div>
  </div>
</template>

<script>
import CellVoltCard from './CellVoltCard'

export default {
  components: {
    CellVoltCard
  },
  props: ['values']
}
</script>

<style lang="scss" scoped>

.cellsVolt {
  background-color: #3a3a3a;
  color: #fff;
  margin: 2px auto;
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
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-auto-flow: column;
    justify-items: stretch;
  }
}

</style>
