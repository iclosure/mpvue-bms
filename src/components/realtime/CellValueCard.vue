<template>
  <div class='cellValue'>
    <div class="divIndex">
      <div class="index">{{ number }}</div>
    </div>
    <div class="divValue">
      <div class="value">{{ numeric }}</div>
    </div>
    <div class="unit" v-if="value">{{ unit }}</div>
  </div>
</template>

<script>
import { fixNumeric } from '@/utils/index'

export default {
  components: {
  },
  props: ['index', 'value', 'unit'],
  methods: {
  },
  computed: {
    number () {
      return fixNumeric(this.index, 2)
    },
    numeric () {
      return this.value ? this.value.toFixed(3) : '-'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../style/font/consolas.css');

.cellValue {
  background-color: #3e3e42;
  border-radius: 6rpx;
  margin: auto;
  width: 247rpx;
  height: 44rpx;
  display: flex;
  .divIndex {
    height: 80%;
    background-color: #355b73;
    color: #eee;
    width: 1.7em;
    margin: auto 2rpx auto 2rpx;
    border-radius: 10px;
    font-family: Consolas;
    font-size: 0.9em;
    display: flex;
    .index {
      margin: auto;
    }
  }
  .divValue {
    font-family: "Consolas";
    margin-left: 6rpx;
    color: #6cca62;
    display: flex;
    .value {
      margin: auto;
    }
  }
  .unit {
    color: lightgreen;
    font-size: 0.5em;
    margin-left: 1rpx;
    margin-top: 1rpx;
  }
}

</style>
