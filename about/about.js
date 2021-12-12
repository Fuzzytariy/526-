Page({
    data: {
      student: {
        rate: ''
      },
    },
    submit(event){
      const {detail} = event;
        detail = {
           values: {
               studentrate:''
           },
        }
    },
    onLoad: function () {
      wx.lin.initValidateForm(this)
    },
  })
  