// pages/amend/amend.js
Page({
    data: {
      student: {
        name: '',
        age: '',
        address: ''
      },
    },
    submit(event){
      const {detail} = event;
        detail = {
           values: {
               studentName: "",
               studentAge: "",
               studentAddress: ""
           },
        }
    },
    onLoad: function () {
      wx.lin.initValidateForm(this)
    },
  })
  