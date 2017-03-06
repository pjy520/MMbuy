/**
 * Created by Administrator on 2016/12/25.
 */
window.itcast = {};
/*定义了一个itcast的对象*/
//封装一个transitionEnd  过度结束事件
itcast.transitionEnd = function (dom, callback) {
    /* 需要绑定事件的dom  绑定之后  当触发了 事件的时候  执行 callback */
    if (dom && typeof  dom == 'object') {
        dom.addEventListener('webkitTransitionEnd', function () {
            /*if(callback){
             callback();
             }*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd', function () {
            callback && callback();
        });
    }
}

/*封装tap*/
itcast.tap = function (dom,callback) {
    if (dom && typeof dom == 'object'){
        var isMove = false;
        var startTime = 0;
        dom.addEventListener('touchstart',function(){
            startTime = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            isMove = true;
        })
        dom.addEventListener('touchend',function(e){
            if(!isMove && (Date.now()-startTime) < 150){
                callback &&　callback(e);
            }
            isMove = false;
            startTime = 0;
        })
    }
}