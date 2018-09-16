<template>
  <div class="container">
    <div class="message">
      当前均衡板不支持该功能
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },

  created () {
  }
}
</script>

<style lang="scss" scoped>

.container {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  .message {
    margin: auto;
    color: #666;
    font-size: 1.5em;
  }
}

</style>

