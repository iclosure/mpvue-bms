<template>
  <div>
    <div class="send">
      <i-button i-class="btnSendAll" bind:click="sendAll" type="success" size="small">一键设置</i-button>
    </div>
    <ParamsCard i-class="params" :items="items"></ParamsCard>
  </div>
</template>

<script>
import ParamsCard from '@/components/settings/ParamsCard'

export default {
  components: {
    ParamsCard
  },
  data () {
    return {
      items: []
    }
  },
  created () {
    // 单体数量
    this.items.push({
      name: '单体数量',
      minimum: 0,
      maximum: 20,
      unit: '串',
      value: Math.random() * 10
    })
    // 识别单体电压
    this.items.push({
      name: '识别单体电压',
      minimum: 0,
      maximum: 20,
      unit: 'V',
      value: Math.random() * 10
    })
    // 触发均衡压差
    this.items.push({
      name: '触发均衡压差',
      minimum: 0,
      maximum: 20,
      unit: 'V',
      value: 0
    })
    // 最大均衡电流
    this.items.push({
      name: '最大均衡电流',
      minimum: 0,
      maximum: 20,
      unit: 'A',
      value: 0
    })
    // 自动关机电压
    this.items.push({
      name: '自动关机电压',
      minimum: 0,
      maximum: 20,
      unit: 'V',
      value: 0
    })
    // 电压采集基准
    this.items.push({
      name: '电压采集基准',
      minimum: 0,
      maximum: 20,
      unit: 'V',
      value: 0
    })
  },
  methods: {
    sendAll () {
      console.log('send all button clicked')
    }
  }
}
</script>

<style lang="scss" scoped>

.send {
  margin: 12rpx;
}

</style>
