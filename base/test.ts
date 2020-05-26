const num:number = 1;

const str:string = '1';

const arr:number[]= [1,2,3,5];

const arr1:Array<string> = ['1']

const enum Gender {
    BOY,
    GIRL,
}

const arr2:Array<any> = [1,'2','4',true]


//联合类型
const counter:(number|string) = 1;


//1. 函数定义
function greet(name:string):void{
    console.log('hello' + name)
}

//2. 函数表达式，约束函数类型的 不是箭头函数 只是一种写法
type SumFn = (x:number,y?:number) => number

// y 就是可选参数 可穿可不穿
const sum:SumFn = function(x:number,y:number=0):number{
    return x + y;
}

//3. 函数的重载：java里面：两个函数名一样，但是参数和类型不一样，
// 在TS里面，仅仅值得是为一个函数提供多个函数定义
const obj = {
    name:'zs',
    age:10,
};

// 必须连在一起不然不报错 函数的声明和实现
function attr(val:number):void
function attr(val:string):void
function attr(val:any):void{
    if(typeof val === 'number'){
        obj.age = val;
    }
    if(typeof val === 'string'){
        obj.name = val;
    }
}
attr(10);
attr('aaa');
// attr(true);

//类的修饰符 public protected private
//public 谁都可以访问
//protected 只有类和子类可以访问
//private 只有自己能访问
class Animal{
    public name:string;
    protected age:number;
    private g:string;
}
class Dog extends Animal{
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    // getG(){
    //     console.log(this.g)
    // }
}

//类的静态属性
class Person{
    public name:string|number;
    static preText = 'hello :'
    say = function(){
        console.log(Person.preText + this.name)
    }
    constructor(name:string|number){
        this.name = name;
    }
}
const women = new Person('zhangsan');
women.say();

// 抽象类abstract abstract 不能被实例化 不能被new 只能继承  作用： 封装一些公共的方法和属性
abstract class Car{
    name:string;
    //子类必须有getName的方法
    abstract getName():void;
    constructor(name:string){
        this.name = name;
    }
}

class Bmw extends Car{
    getName(){
        console.log(this.name)
    }
}

const bwm1 = new Bmw('bwm 740');


export default { num }