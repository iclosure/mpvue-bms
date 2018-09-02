<script>

export default {
  data: function () {
    return {
      sysinfo: wx.getSystemInfoSync(),
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  created: function () {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onLaunch: function () {
    var platform = this.getPlatform()
    var version = this.getVersion()
    var showNotice = function (version) {
      wx.showModal({
        title: '提示',
        content: `当前微信版本过低，请更新至最新版本（须大于${version}）`,
        showCancel: false
      })
    }
    if (platform === 'android' && this.versionCompare('6.5.7', version)) {
      showNotice('6.5.7')
    } else if (platform === 'ios' && this.versionCompare('6.5.6', version)) {
      showNotice('6.5.6')
    }
  },
  onHide () {
    console.log('app hidden')
  },
  methods: {
    getModel: function () {
      // 获取手机型号
      return this.sysinfo['model']
    },
    getVersion: function () {
      // 获取微信版本号
      return this.sysinfo['version']
    },
    getSystem: function () {
      // 获取操作系统版本
      return this.sysinfo['system']
    },
    getPlatform: function () {
      // 获取客户端平台
      return this.sysinfo['platform']
    },
    getSDKVersion: function () {
      // 获取客户端基础库版本
      return this.sysinfo['SDKVersion']
    },
    versionCompare: function (ver1, ver2) {
      // 版本比较
      var version1pre = parseFloat(ver1)
      var version2pre = parseFloat(ver2)
      var version1next = parseInt(ver1.replace(version1pre + '.', ''))
      var version2next = parseInt(ver2.replace(version2pre + '.', ''))
      if (version1pre > version2pre) {
        return true
      } else if (version1pre < version2pre) {
        return false
      } else {
        if (version1next > version2next) {
          return true
        } else {
          return false
        }
      }
    }
  }
}
</script>

<style>

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

page {
    background: #323232;
}

</style>
