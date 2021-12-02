// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    //自定义标记点数组
     markers:[],
    //纬度
    latitude:'',
    //经度
    longitude:'',
    //左侧任务栏开关
    open: false,

    idxNum:0,
    n:6,
    m:6,

  },
  onLoad: function() { 
  var that = this; 
  //  获取当前定位的经纬度信息
  wx.showLoading({
   title:"定位中",
   mask:true
  })
  wx.getLocation({
   type: 'gcj02',
   altitude:true,//高精度定位
   //定位成功，更新定位结果
   success: function (res) {
     var latitudee = res.latitude
     var longitudee = res.longitude
     that.setData({
       longitude:parseFloat(longitudee),
       latitude: parseFloat(latitudee),
     })
   },
   //定位失败回调
   fail:function(){
     wx.showToast({
       title:"定位失败",
       icon:"none"
     })
   },
   complete:function(){
   //隐藏定位中信息进度
     wx.hideLoading()
   }
  })
  },
   
   //左侧任务栏响应
   tap_ch: function(e){
    if(this.data.open){
      this.setData({
        open : false
      });
    }else{
      this.setData({
        open : true
      });
    }
  },
  tap_ch_map: function(e){
    if(this.data.open){
      this.setData({
        open : false
      });
    }
  },
  
  list_ch: function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      idxNum : index
    })

  },
  
  //转至登记信息页面
  gotoregister: function(e){
    wx.navigateTo({
      url: '../register/register',
      })
  },

  gotosignin: function(e){
    wx.navigateTo({
      url: '../signin/signin',
      })
  }
  
}) 

