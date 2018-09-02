<template>
  <div>
    <div class="topBar">

    </div>
    <div class="globalStatus">

    </div>
    <ul class="cellVolts" :key="index" v-for="(item, index) in cellVolts">
      <li class="celVolt">
        <span class="label">fixNumeric({{ index }} + 1, 2)</span>
        <span class="field">{{ item.value }}</span>
      </li>
    </ul>
    <ul class="cellReses" :key="index" v-for="(item, index) in cellReses">
      <li class="cellRes">
        <span class="label">fixNumeric({{ index }} + 1, 2)</span>
        <span class="field">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatSeconds, fixNumeric } from '@/utils/index'

export default {
  components: {},
  data () {
    return {
      cellVolts: [],
      timerId: 0
    }
  },
  created () {
  },
  onShow () {
    this.timerId = setInterval(() => {
      wx.setNavigationBarTitle({
        title: formatSeconds(new Date().getSeconds())
      })
    }, 1000)
  },
  onHide () {
    clearInterval(this.timerId)
  },
  methods: {
    fixNumeric (numeric, length) {
      return fixNumeric(numeric, length)
    }
  }
}
</script>

<style>

.rate1 i-badge {
  width: 189rpx;
}

</style>
