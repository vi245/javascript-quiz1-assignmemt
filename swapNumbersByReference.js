// Swap two numbers by reference
const passByReference =(obj)=>{
    let temp=obj.a;
    obj.a=obj.b;
    obj.b=temp;
}

let obj={
    a:1,
    b:2,
}

console.log(`Before calling pass by refernce a = ${obj.a} and b = ${obj.b} `);

passByReference(obj);

console.log(`After calling pass by refernce a = ${obj.a} and b = ${obj.b} `);