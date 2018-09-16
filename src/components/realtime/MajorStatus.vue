<template>
  <div class="majorStatus">
    <ValueField i-class="equCurr" name="均衡电流" :value="Math.random()*10" unit="A"></ValueField>
    <ValueField i-class="battVolt" name="电池电压" :value="Math.random()*10" unit="V"></ValueField>
    <ValueField i-class="aveCellVolt" name="单体平均" :value="Math.random()*10" unit="V"></ValueField>
    <ValueField i-class="maxVoltDiff" name="最大压差" :value="Math.random()*10" unit="V"></ValueField>
  </div>
</template>

<script>
import ValueField from '@/components/realtime/ValueField'

export default {
  components: {
    ValueField
  },
  props: ['equCurr', 'battVolt', 'aveCellVolt', 'maxVoltDiff']
}
</script>

<style lang="scss" scoped>

.majorStatus {
  margin: 1px auto;
  background-color: #3a3a3a;
  display: grid;
  grid-template-columns: 50% 50%;
}

</style>
