// 防抖个人理解，在固定时间内，如果该事件再次出发，那么重新计时，并且重新开始执行该事件
// 函数
function debounce(fn, wait) {
    let _timer = null;
    return function() {
        let _this = this;
        let _argments = arguments;
        if(_timer) {
            clearTimeout(_timer);
        }else {
            _thimer = setTimeout(() => {
                fn.apply(_this, _argments)
            }, wait);
        }
    }
}

window.onresize = debounce(function () {
    console.log("resize");
}, 500);

// 节流个人理解，就是固定时间内，无论触发多少次事件都是执行一次
function thorttle(fn, wait) {
    let _thimer = null;
    return function() {
        let _this = this;
        let _argments = arguments
        if(!_thimer) {
            _timer = setTimeout(() => {
                _timer = null
                fn.apply(_this, _argments);
            }, wait)
        }
    }
}