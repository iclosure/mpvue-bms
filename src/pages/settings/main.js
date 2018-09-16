import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '参数设置',
    usingComponents: {
      'i-button': '/static/iview/button/index',
      'i-input': '/static/iview/input/index',
      'i-input-number': '/static/iview/input-number/index'
    }
  }
}
