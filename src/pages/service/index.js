var app = getApp();
var create = require('../../core/createPage');
// Page();
create({
    data: {
        width: 0
    },
    getCanvasWidth () {
        var query = wx.createSelectorQuery();
        var kline = query.select('#kline');
        kline.boundingClientRect(function (react) {
            console.log(react);
        }).exec();
    }
});