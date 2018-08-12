import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  data () {
    return {
    }
  },

  config: {
    navigationBarTitleText: '设备管理',
    enablePullDownRefresh: true,
    usingComponents: {
      'i-button': '/static/iview/button/index',
      'i-cell-group': '/static/iview/cell-group/index',
      'i-cell': '/static/iview/cell/index',
      'i-panel': '/static/iview/panel/index',
      'i-icon': '/static/iview/icon/index',
      'i-card': '/static/iview/card/index'
    }
  }
}
