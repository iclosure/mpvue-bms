import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      'pages/logs/main',
      '^pages/realtime/main',
      'pages/settings/main',
      'pages/control/main',
      'pages/device/main'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#652725',
      navigationBarTitleText: 'BMS',
      navigationBarTextStyle: 'white',
      backgroundColor: '#303030'
    },
    tabBar: {
      backgroundColor: '#303030',
      color: '#ccc',
      selectedColor: '#6cca62',
      list: [
        {
          pagePath: 'pages/realtime/main',
          text: '实时状态',
          iconPath: 'static/image/tabbar/status.png',
          selectedIconPath: 'static/image/tabbar/status-sel.png'
        },
        {
          pagePath: 'pages/settings/main',
          text: '参数设置',
          iconPath: 'static/image/tabbar/settings.png',
          selectedIconPath: 'static/image/tabbar/settings-sel.png'
        },
        {
          pagePath: 'pages/control/main',
          text: 'BMS控制',
          iconPath: 'static/image/tabbar/control.png',
          selectedIconPath: 'static/image/tabbar/control-sel.png'
        },
        {
          pagePath: 'pages/device/main',
          text: '设备管理',
          iconPath: 'static/image/tabbar/device.png',
          selectedIconPath: 'static/image/tabbar/device-sel.png'
        }
      ]
    },
    debug: true
  }
}
