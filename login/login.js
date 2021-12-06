
// pages/index/index.js
Page({

  data: {
    isLogin:false,
    name:"请登录",
    iconUrl:""
  },

  
  jump(e){
    var href = e.currentTarget.dataset.target
    console.log(href)
    wx.navigateTo({
      url: '../'+href+'/'+href,
    })
  },
  
  getInfo:function(){
    var that = this;
    wx.getUserProfile({
      desc: 'desc',
      success(res){
        that.setData({
          isLogin:true,
          name:res.userInfo.nickName,
          iconUrl:res.userInfo.avatarUrl
        })
        wx.cloud.callFunction({
          name:'login',
          data:{
            name:res.userInfo.nickName,
            iconUrl:res.userInfo.avatarUrl
          }
        })
     }
    })
  },
  loginCheck(){
    var that = this
    wx.cloud.callFunction({
      name:'getUser',
      success:function(res){
        var data =  res.result
        if(data.data.length>0){
          that.setData({
            isLogin:true,
            name:data.data[0].name,
            iconUrl:data.data[0].iconUrl
          })
        }
        else{
          that.setData({
            iconUrl:"cloud://cloud1-2gl2hv6x63504485.636c-cloud1-2gl2hv6x63504485-1308313603/icon.jfif"
          })
        }
      }
    })
  },

  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loginCheck()
    wx.showLoading({
      title: '正在加载',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    wx.hideLoading({
      success: (res) => {
         wx.showToast({
          title: '加载成功',
          icon: 'success'
        })
      },
    })
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