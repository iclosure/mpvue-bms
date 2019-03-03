<template>
<div>
  <!-- <div class="title">
    --{{ what }} 
  </div> -->
  <HeaderCard i-class="header" :switchEqu="switchEqu"></HeaderCard>
  <MajorStatus i-class="majorStatus"></MajorStatus>
  <CellsVoltCard i-class="cellsVolt" :values="cellVolts"></CellsVoltCard>
  <CellsResCard i-class="cellsRes" :values="cellReses"></CellsResCard>
</div>
</template>

<script>
import { formatSeconds } from '@/utils/index'
import HeaderCard from '@/components/realtime/HeaderCard'
import MajorStatus from '@/components/realtime/MajorStatus'
import CellsVoltCard from '@/components/realtime/CellsVoltCard'
import CellsResCard from '@/components/realtime/CellsResCard'

import { mapState } from 'vuex'

export default {
  components: {
    HeaderCard,
    MajorStatus,
    CellsVoltCard,
    CellsResCard
  },
  data () {
    return {
      timerId: 0,
      switchEqu: true,
      cellVolts: [],
      cellReses: []
    }
  },
  computed: {
    ...mapState({
      what: state => state.what
    })
  },
  created () {
    // TEST
    var i
    for (i = 0; i < 24; ++i) {
      this.cellVolts.push(Math.random() * 10)
    }
    for (i = 0; i < 25; ++i) {
      this.cellReses.push(Math.random() * 10)
    }
    // TEST
    setTimeout(() => {
      var i
      var array = []
      for (i = 0; i < this.cellVolts.length; ++i) {
        array.push(Math.random() * 10)
      }
      this.cellVolts = array
      array = []
      for (i = 0; i < this.cellReses.length; ++i) {
        array.push(Math.random() * 10)
      }
      this.cellReses = array
    }, 500)
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
    onSwEquChange (event) {
      this.swEqu = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
