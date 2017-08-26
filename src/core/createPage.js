var app = getApp();
module.exports = ($opt = {})=> {
    $opt.util = {
        log () {
            console.log(arguments);
        }
    };
    $opt.app = app;
    $opt.global = app.globalData;
    return Page($opt);
};