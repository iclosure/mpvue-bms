<template>
  <div class="params">
    <div class="rows" v-for="(item, i) in items" :key="i">
      <div class="cell">
        <i-input class="input" type="number" :title="item.name + (item.unit ? '(' + item.unit + ')' : '') + '：'" :min="item.minimum" :max="item.maximum" :value="item.value" right></i-input>
        <div class="send">
          <i-button class="btnSend" bind:click="send" type="success" size="small">发送</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RowParam from './RowParam'

export default {
  components: {
    RowParam
  },
  props: [ 'items', 'value' ],
  methods: {
    send () {
      console.log('send button clicked!')
    }
  }
}
</script>

<style lang="scss" scoped>

.params {
  color: #ccc;
  display: flex;
  flex-direction: column;
  .cell {
    display: flex;
    margin: 5px 8px;
    .input {
      flex: 1;
      margin: 2px 6px auto auto;
    }
    .send {
      margin: auto;
    }
  }
}

</style>
