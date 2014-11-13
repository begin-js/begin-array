define('begin:Array', function (expors, require, module) {
    var begin = require('begin:begin');

    // 寄托到begin对象上
    begin.Array = BeginArray;

    // 导出
    module.expors = BeginArray;

    /**
     * 数组包裹
     */
    function BeginArray(array) {
        var me = this;

        me.array = array;

        // 考虑使用一个统一的内部储存变量
        me.instance = me.array;

        // 考虑使用一个缩写的instance
        me.i = me.instance;
    }

    /**
     * 遍历循环
     * @param {Function} forEachCallback 遍历回调函数
     */
    BeginArray.prototype.forEach = function (forEachCallback) {
        this.i.forEach.apply(this.i, arguments);
    }
});
