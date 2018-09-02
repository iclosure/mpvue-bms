<template>
  <div>
    <div class="topBar">
      <i-cell i-class="cellTopBar" title="均衡开关">
        <i-switch :value="switch1" size="small" @change="onSwEquChange" slot="footer">
            <view slot="open">开</view>
            <view slot="close">关</view>
        </i-switch>
    </i-cell>
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
      timerId: 0,
      switch1: true
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
    },
    onSwEquChange (event) {
      this.switch1 = event.target.value
    }
  }
}
</script>

<style lang="scss">
.topBar {
  width: 100%;
  height: 60rpx;
  background: #484848;
}

.cellTopBar {
  background-color: #222;
  color: black;
}

</style>
