Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 这是首页导航栏请求数据接收数组
    navList: []
  },
  // 发送请求获取导航栏数据
  getNavList:function() {
    let that = this;
    // 内置方法
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success: function(res) {
        if (res.data.code === 0) {
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1,调用函数请求导航栏数据
    this.getNavList();
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