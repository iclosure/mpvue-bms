<template>
  <div class='cellVolt'>
    <span class="index">{{ number }}</span>
    <span class="value">{{ numeric }}</span>
    <span class="unit" v-if="value">V</span>
  </div>
</template>

<script>
import { fixNumeric } from '@/utils/index'

export default {
  components: {
  },
  props: ['index', 'value'],
  methods: {
  },
  computed: {
    number () {
      return fixNumeric(this.index + 1, 2)
    },
    numeric () {
      return this.value ? this.value.toFixed(3) : '-'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../style/font/consolas.css');

.cellVolt {
  background-color: #3e3e42;
  border-radius: 3px;
  margin: 1px;
  display: flex;
  .index {
    background-color: #355b73;
    color: #eee;
    width: 1.7em;
    height: 100%;
    margin: auto 2px auto 2px;
    border-radius: 0.7em;
    text-align: center;
    font-family: Consolas;
    font-size: 0.9em;
  }
  .value {
    font-family: Consolas;
    margin-left: 6rpx;
    color: #6cca62;
  }
  .unit {
    color: lightgreen;
    font-size: 0.5em;
    margin-left: 1px;
    margin-top: 0;
  }
}

</style>
