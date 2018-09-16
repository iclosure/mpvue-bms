<template>
  <div class="valueField">
    <div class="name">{{ name }}：</div>
    <div class="value">{{ numeric }}</div>
    <div class="unit" v-if="unitValid" >{{ unit }}</div>
  </div>
</template>

<script>

export default {
  props: ['name', 'value', 'unit'],
  computed: {
    numeric () {
      return this.value.toFixed(3)
    },
    unitValid () {
      var unit = this.unit
      return unit && unit.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>

.valueField {
  width: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  .value {
    font-family: Consolas;
    color: #6cca62;
    margin: auto 0;
  }
  .unit {
    color: lightgreen;
    font-size: 0.5em;
    margin-left: 1rpx;
    margin-top: 0;
  }
}

</style>
