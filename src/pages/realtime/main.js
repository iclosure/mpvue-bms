import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '实时状态',
    usingComponents: {
      'i-button': '/static/iview/button/index',
      'i-rate': '/static/iview/rate/index'
    }
  }
}
