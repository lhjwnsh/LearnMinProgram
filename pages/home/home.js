// getApp()获取App产生的实例对象
const app = getApp()
// console.log(app.globaData.name)
// console.log(app.globaData.age)
const name = app.globaData.name
const age = app.globaData.age
// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  handleGetUserInfo(event) {
    console.log(event)
  },
// 其他事件的监听
  // 监听页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  },
  // 监听页面滚动到顶部
  onReachBottom() {
    console.log('页面滚动到顶部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新事件')
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/api/m3/recommend',
      success: (res) => {
        // const.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})