<template>
  <div class="device">
    <img class="icon" src="/static/image/bluetooth.png" alt="蓝牙">
    <div class="vert">
      <div class="hori">
        <div class="title">{{ device.name.length > 0 ? device.name : '?' }}</div>
        <div class="rssi">{{ device.RSSI }}</div>
      </div>
      <div class="deviceId">{{ device.deviceId }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['device']
}
</script>

<style lang="scss" scoped>

.device {
  background-color: #344;
  border-radius: 6px;
  border: 1px solid #455;
  margin: 6px 6px auto 6px;
  padding: 6px;
  height: 50px;
  display: flex;
  .icon {
    width: 35px;
    height: 35px;
    margin: auto;
  }
  .vert {
    flex: 1;
    margin-left: 3px;
    display: flex;
    flex-direction: column;
    .hori {
      display: flex;
      .title {
        flex: 1;
        font-size: 1.2em;
        color: #6cca62;
      }
      .rssi {
        color: #aaa;
      }
    }
    .deviceId {
      position: flex;
      flex: 1;
      margin-top: 3px;
      color: #aaa;
      font-size: 0.8em;
    }
  }
  &:active {
    background-color: #356;
  }
}

</style>


