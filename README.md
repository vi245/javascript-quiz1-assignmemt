## Javascript Quiz 1 Assignment

# What isJavaScript?

Javascript is a scripting language used on the client side to control webpage behaviour.
It is used along with HTML and CSS to make the webpage interactive and dynamic.
for example : update content dynamically , animate images,control multimedia etc.

# What is the difference between let and var?

As we know that javascript accompanies dynamic typing, so let and var both can
store any type of data(number,string,boolean) etc.

## let:

- # scope: block scope
- can be updated but can't be redeclared into the scope
- can be declared without initialization
- can't be accesed without initialization as it returns an error

## var:

- # scope: fuctional scope
- can be updated and redeclared into the scope
- can be declared without initialization
- can't be accesed without initialization as it default value is undefined

# Why do we prefer const over var?

As var can be updated or redeclared into scope that would not be correct if var hold some constant value
that must not be updated or redeclared.
Therefore, const must br prefered to store constant value as it can't be updated or redeclared into scope.

# What is the use of javascript in web browsers?

It is used along with HTML and CSS to make the webpage interactive and dynamic.
for example : update content dynamically , animate images,control multimedia etc.

# What are Objects?

Objects are standalone entity used to store data in key value pair.
for example:

```Javascript
  let person={
    name:"John",
    age:"25",
    address:"pitampura",
  }
```

# What is an array and how is it different from an Object in Javascript?

Arrays is a collection of same type of data whereas object is used to hold data of
different types and that too in key value pair.
for example:

```Javascript
 let fruits=["apple","mango","orange"]
 let fruit={
    name:"apple",
    color:"red",
    number:2,
    }
```

# What is a function?

function is a module that is used to write specific code to specific purpose.
Also it is reusable code which we can invoke at any point of time.
Also it reduced redundency and makes code more modular.

```Javascript
 const add=(a,b)=>{
    let sum =a+b;
    return sum;
 }
 add(4,5);
```

# How can we implement call by value and call by reference in Javascript?

## Call by value

```Javascript
 const passByValue=(a,b)=>{
    let temp=a;
    a=b;
    b=temp;
    console.log(`inside calling pass by value a = ${a} and b = ${b} `);//a=2 and b=1
 }
    let a=1;
    let b=2;
    console.log(`Before calling pass by value a = ${a} and b = ${b} `); // a=1 and b=2
    passByValue(a,b);
    console.log(`After calling pass by value a = ${a} and b = ${b} `);// a=1 and b=2

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

console.log(`Before calling pass by refernce a = ${obj.a} and b = ${obj.b} `);// a=1 and b=2

passByReference(obj);

console.log(`After calling pass by refernce a = ${obj.a} and b = ${obj.b} `); //a=2 and b=1
```

# What are the primitive data typesin Javascript?

The data type which are already defined by the javascript is known as primitive data types
They are immutable i.e they are hardcoded and do not have reference
for example : string,boolean,number etc are primitive datatypes

# What is DOM?

DOM is a cross-platform and platform independent document object model through which we can get access to the webpage elements.
Its is a tree like structure where every node is an object representing a part of the document.

# Why do we use DOM?

The Document Object Model (DOM) is a programming interface for web documents. Itis used to change the document structure, style, and content. The DOM represents the document as nodes and objects and that way programming languages can interact with the page.
