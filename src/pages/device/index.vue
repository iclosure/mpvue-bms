<template>
  <div>
    <i-panel v-if="devices.length > 0" class="cell-panel-device">
      <i-cell-group v-for="(device, index) in devices" :key="index">
        <i-cell :title="device.name" :label="device.deviceId" :value="device.RSSI" @click="connectDevice(`${index}`)" class='cell-device'>
          <i-icon custom="/static/image/bluetooth.png" size="30" slot="icon"/>
        </i-cell>
      </i-cell-group>
    </i-panel>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      sysinfo: wx.getStorageInfoSync(),
      scanning: false,
      scanTimerHandle: null,
      devices: [],
      services: [],
      currentIndex: -1,
      serviceId: ''
    }
  },

  created () {
    this.openAdapter()
  },
  destroyed () {
    this.stopScan()
    this.closeAdapter()
  },
  onPullDownRefresh () {
    this.startScan()
  },
  onReachBottom () {
    console.warn('test')
    this.stopScan(true)
  },
  watch: {
  },

  methods: {
    openAdapter () {
      var that = this
      wx.openBluetoothAdapter({
        success: function () {},
        fail: function () {
          wx.showLoading({
            title: '请开蓝牙',
            icon: 'loading',
            duration: 2000
          })
        },
        complete: function () {
          console.log('complete opening adapter')
          wx.onBluetoothAdapterStateChange(function (res) {
            if (res.available) {
              if (that.sysinfo['platform'] === 'ios') {
                setTimeout(function () {
                  that.openAdapter()
                }, 2000)
              } else {
                that.openAdapter()
              }
            }
          })
        }
      })
    },
    closeAdapter () {
      this.devices = []
      this.stopScan(true)
      wx.closeBluetoothAdapter({
        success: function () {
        }
      })
    },
    startScan () {
      var that = this
      this.stopScan()
      this.scanning = true
      this.devices = []
      wx.showNavigationBarLoading()
      this.scanTimerId = setTimeout(function () {
        wx.stopBluetoothDevicesDiscovery({
          complete: function () {
            that.scanning = false
            that.scanTimerHandle = null
          },
          success: function (res) {
            that.stopScan(false)
          }
        })
      }, 5000)
      wx.startBluetoothDevicesDiscovery({
        // services: ['FFE0'],  // 只搜索透传蓝牙
        success: function (res) {
          that.registryFound()
        },
        fail: function () {
          if (that.scanTimerHandle) {
            clearTimeout(that.scanTimerHandle)
            that.scanTimerHandle = null
          }
        }
      })
    },
    stopScan (cancel) {
      var that = this
      var reset = function () {
        that.scanning = false
        if (that.scanTimerHandle) {
          clearTimeout(that.scanTimerHandle)
          that.scanTimerHandle = null
        }
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
      }
      if (cancel) {
        wx.stopBluetoothDevicesDiscovery({
          complete: function () {
            reset()
          }
        })
        this.disconnectDevice(that.currentIndex)
      } else {
        reset()
      }
    },
    registryFound () {
      var that = this
      wx.onBluetoothDeviceFound(function (res) {
        if (res.deviceId) {
          that.addDevice(res)
        } else if (res.devices) {
          that.addDevice(res.devices[0])
        } else if (res[0]) {
          that.addDevice(res[0])
        }
      })
    },
    addDevice (device) {
      var that = this
      for (var i in that.devices) {
        var _device = that.devices[i]
        if (_device.deviceId === device.deviceId) {
          that.devices.splice(i, 1, device)
          return
        }
      }
      console.log(`found device(s) ${device.name}`)
      that.devices.push(device)
    },
    getDevice (index) {
      if (index < 0 || index >= this.devices.length) {
        return null
      }
      return this.devices[index]
    },
    connectDevice (index) {
      var that = this
      console.log(`${index}: connect device`)
      this.currentIndex = index
      var device = this.getDevice(index)
      if (!device) {
        return false
      }
      wx.onBLEConnectionStateChange(function (res) {
        // 该方法回调中可以用于处理连接意外断开等异常情况
        console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
      })
      wx.onBLECharacteristicValueChange(function (characteristic) {
        console.log('characteristic value comed:', characteristic)
      })
      wx.createBLEConnection({
        deviceId: device.deviceId,
        timeout: 3000,
        success: function (res) {
          that.stopScan(false)
          console.log('connect success')
          /**
           * 连接成功，后开始获取设备的服务列表
           */
          wx.getBLEDeviceServices({
            // 这里的 deviceId 需要在上面的 getBluetoothDevices中获取
            deviceId: device.deviceId,
            success: function (res) {
              that.services = res.services
              console.log('device services uuid:', that.services[0].uuid)
              that.services.forEach(service => {
                console.log('service: ', service, service.uuid)
              })
              that.serviceId = that.services[0].uuid
              console.log('service id:', that.serviceId)
              // 延迟1.5秒，根据服务获取特征
              setTimeout(function () {
                wx.getBLEDeviceCharacteristics({
                  // 这里的 deviceId 需要在上面的 getBluetoothDevices
                  deviceId: device.deviceId,
                  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                  serviceId: that.serviceId,
                  success: function (res) {
                    console.log('getBLEDeviceCharacteristics:', res.characteristics)
                    for (var i = 0; i < res.characteristics.length; i++) {
                      var characteristic = res.characteristics[i]
                      console.log('characteristic.uuid:', characteristic.uuid)
                      if (characteristic.uuid.indexOf('FFE1') !== -1) {
                        console.log('----------FFE1')
                      } else if (characteristic.uuid.indexOf('FFE2') !== -1) {
                        console.log('----------FFE2')
                      } else if (characteristic.uuid.indexOf('FFE3') !== -1) {
                        console.log('----------FFE3')
                      }
                    }
                    // 回调获取设备发过来的数据
                    wx.onBLECharacteristicValueChange(function (characteristic) {
                      console.log('characteristic value comed:', characteristic.value, characteristic.characteristicId)
                      // {value: ArrayBuffer, deviceId: "D8:00:D2:4F:24:17",
                      // serviceId: "ba11f08c-5f14-0b0d-1080-007cbe238851-0x600000460240",
                      // characteristicId: "0000cd04-0000-1000-8000-00805f9b34fb-0x60800069fb80"}
                      // 监听cd04中的结果
                      if (characteristic.characteristicId.indexOf('FFE1') !== -1) {
                        const result = characteristic.value
                        const hex = that.buf2hex(result)
                        console.log(hex)
                      } else if (characteristic.characteristicId.indexOf('FFE2') !== -1) {
                        const result = characteristic.value
                        const hex = that.buf2hex(result)
                        console.log(hex)
                      } else if (characteristic.characteristicId.indexOf('FFE3') !== -1) {
                        const result = characteristic.value
                        const hex = that.buf2hex(result)
                        console.log(hex)
                      }
                    })
                    // 顺序开发设备特征notifiy
                    wx.notifyBLECharacteristicValueChanged({
                      deviceId: device.deviceId,
                      serviceId: that.serviceId,
                      characteristicId: '0000FFE1-0000-1000-8000-00805F9B34FB',
                      state: true,
                      success: function (res) {
                        // success
                        console.log('notifyBLECharacteristicValueChanged success', res)
                      },
                      fail: function (res) {
                        // fail
                      },
                      complete: function (res) {
                        // complete
                      }
                    })
                    wx.notifyBLECharacteristicValueChanged({
                      deviceId: device.deviceId,
                      serviceId: that.serviceId,
                      characteristicId: '0000FFE2-0000-1000-8000-00805F9B34FB',
                      state: true,
                      success: function (res) {
                        // success
                        console.log('notifyBLECharacteristicValueChanged success', res)
                      },
                      fail: function (res) {
                        // fail
                      },
                      complete: function (res) {
                        // complete
                      }
                    })
                    wx.notifyBLECharacteristicValueChanged({
                      deviceId: device.deviceId,
                      serviceId: that.serviceId,
                      characteristicId: '0000FFE3-0000-1000-8000-00805F9B34FB',
                      state: true,
                      success: function (res) {
                        // success
                        console.log('notifyBLECharacteristicValueChanged success', res)
                      },
                      fail: function (res) {
                        // fail
                      },
                      complete: function (res) {
                        // complete
                      }
                    })
                  },
                  fail: function (res) {
                    console.log(res)
                  }
                })
              }, 1500)
            }
          })
        },
        fail: function () {
          console.warn('connect failure!')
          that.stopScan(true)
        }
      })
      return true
    },
    disconnectDevice (index) {
      console.log(`${index}: disconnect device`)
      var device = this.getDevice(index)
      if (!device) {
        return false
      }
      wx.closeBLEConnection({
        deviceId: device.deviceId,
        success: function (res) {
        }
      })
    },
    editDevice (index) {
      console.log(`${index}: edit device`)
    },

    buf2hex (buffer) {
      return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('')
    }
  }
}
</script>

<style>
.cell-panel-device {
    display: block;
    margin-top: 5px;
}

</style>
