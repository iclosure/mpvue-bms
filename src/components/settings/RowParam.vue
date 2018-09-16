<template>
  <div class="rowParam">
    <div class="name">{{ name }}：</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['name', 'minimum', 'maximum', 'unit', 'value']
}
</script>

<style lang="scss" scoped>

.rowParam {
  color: white;
}

</style>
