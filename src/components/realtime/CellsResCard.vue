<template>
  <div class="cellsRes">
    <div class="caption">
      <div class="title">均衡线电阻</div>
    </div>
    <div class="content">
      <div class="cells" v-for="(value, i) in values" :key="i">
          <CellResCard :index="i" :value="value"></CellResCard>
      </div>
    </div>
  </div>
</template>

<script>
import CellResCard from './CellResCard'

export default {
  components: {
    CellResCard
  },
  props: ['values']
}
</script>

<style lang="scss" scoped>

.cellsRes {
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
    grid-template-rows: repeat(9, 1fr);
    grid-auto-flow: column;
    justify-items: stretch;
  }
}

</style>
