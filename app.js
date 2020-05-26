//app.js
// 注册小程序示例
App({
// 生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  // 小程序初始化完成时,会执行的生命周期函数
  onLaunch: function () {
    // 一般获取用户信息
    console.log('小程序初始化完成时，显示onLaunch')
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // setTimeout(function() {
    //   const error = new Error()
    //   throw err
    // }, 3000)

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log('界面显示出来，显示onsshow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  // 小程序界面被隐藏后执行的生命周期函数
  onHide: function () {
    console.log('程序界面被隐藏后执行onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当小程序发生脚本错误，或者 api 调用失败时,执行onError')
  },
  // 定义全局数据
  globaData: {
    name: 'liuhongjiang',
    age: 22
  }
})
