//用接口来表示对象的形状
interface Speakable{
    name:string
    sayName: () => void
}

let men:Speakable = {
    name: 'zhang san',
    sayName(){
        console.log(this.name)
    }
}
men.sayName()
// ===================================

// 子接口可以继承父接口
interface Animal{
    // eat方法可以实现也可以不实现
    eat?:() => void,
    speak: () => void,
}

interface Person1 extends Animal{
    motion: string,
    // 表示继承接口的额外参数
    [propName: string]: any,
}

const jack:Person1 = {
    motion: 'boring',
    speak: () => { console.log('i love u') },
    play: () => { console.log('i am  palying') },
}

// ==============
//接口规定自定义的函数

interface getRect{
    (width:number, height: number): number
}

const getRectArea:getRect= (x:number, y: number) => {
    return x * y;
}

getRectArea(1,10)

// 用接口啦约束构造函数的类型

interface PersonInterface{
    name: String,
    getName: ()=> void
}

// 类去继承接口的规范
class Person implements PersonInterface{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName():void{
        console.log(this.name)
    }
}

// 范型
function createArr<T>(length:number,val: T): T[]{
    let arr:T[] = [];
    for (let index = 0; index < length; index++) {
        arr[index] = val;
    }
    return arr;
}

const arr = createArr(5,1);
console.log(arr)

