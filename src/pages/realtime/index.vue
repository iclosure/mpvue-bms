<template>
  <div>
    <button @click="flush('test')">test</button>
    <div v-if="show">次数</div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      show: true,
      flags: {
        visible: true,
        test: false
      }
    }
  },

  created () {
  },

  methods: {
    flush: function (msg) {
      console.log('hello, world', msg)
      this.show = !this.show
    }
  }
}
</script>

<style>

</style>
