<template>
  <div class="devicesPane" v-if="devices.length > 0">
    <div class="cells" v-for="(device, i) in devices" :key="i">
      <DeviceCard i-class="cell" :device="device" :index="i"></DeviceCard>
    </div>
  </div>
</template>

<script>
import DeviceCard from './DeviceCard.vue'

export default {
  components: {
    DeviceCard
  },
  props: ['devices']
}
</script>

<style lang="scss" scoped>

.devicesPane {
  display: flex;
  flex-direction: column;
  color: #fff;
}

</style>


