var app = getApp();
var create = require('../../core/createPage');
// Page();
create({
    data: {
        menu: [
            {idx:1,icon: '', text: '我的钱包', to: ''},
            {idx:2,icon: '', text: '我的订单', to: ''},
            {idx:3,icon: '', text: '地址管理', to: ''},
            {idx:4,icon: '', text: '服务流程', to: ''},
            {idx:5,icon: '', text: '客服', to: ''},
            {idx:6,icon: '', text: '设置', to: ''},
        ]
    },
    nativeToService () {
        wx.navigateTo({url:'/pages/service/index'});
    }
});