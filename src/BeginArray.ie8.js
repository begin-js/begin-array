define('begin:Array.ie8', function (expors, require, module) {
    var BeginArray = require('begin:Array');

    /**
     * 遍历循环
     * @param {Function} forEachCallback 遍历回调函数
     */
    BeginArray.prototype.forEach = function (forEachCallback) {
        for (var i = 0; i < this.array.length; i++) {
            forEachCallback.call(window, this.array[i], i, this.array);
        }
    }
});
