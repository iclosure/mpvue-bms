import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/realtime/main',
      'pages/settings/main',
      'pages/control/main',
      '^pages/device/main'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#0389c4',
      navigationBarTitleText: '极空BMS',
      navigationBarTextStyle: 'white',
      backgroundColor: '#f9f9f9'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/realtime/main',
          text: '实时状态',
          iconPath: '/static/image/tabbar/status.png',
          selectedIconPath: '/static/image/tabbar/status-sel.png'
        },
        {
          pagePath: 'pages/settings/main',
          text: '参数设置',
          iconPath: '/static/image/tabbar/settings.png',
          selectedIconPath: '/static/image/tabbar/settings-sel.png'
        },
        {
          pagePath: 'pages/control/main',
          text: 'BMS控制',
          iconPath: '/static/image/tabbar/control.png',
          selectedIconPath: '/static/image/tabbar/control-sel.png'
        },
        {
          pagePath: 'pages/device/main',
          text: '设备管理',
          iconPath: '/static/image/tabbar/device.png',
          selectedIconPath: '/static/image/tabbar/device-sel.png'
        }
      ]
    },
    debug: true
  }
}
