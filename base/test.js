"use strict";
exports.__esModule = true;
var num = 1;
var str = '1';
var arr = [1, 2, 3, 5];
var arr1 = ['1'];
var arr2 = [1, '2', '4', true];
//联合类型
var counter = 1;
//1. 函数定义
function greet(name) {
    console.log('hello' + name);
}
// y 就是可选参数 可穿可不穿
var sum = function (x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
};
//3. 函数的重载：java里面：两个函数名一样，但是参数和类型不一样，
// 在TS里面，仅仅值得是为一个函数提供多个函数定义
var obj = {
    name: 'zs',
    age: 10
};
function attr(val) {
    if (typeof val === 'number') {
        obj.age = val;
    }
    if (typeof val === 'string') {
        obj.name = val;
    }
}
attr(10);
attr('aaa');
// attr(true);
exports["default"] = { num: num };
