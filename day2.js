//synchronous and asynchronous programming 
//synchronous programming 
// function hello(){
//     console.log("hello,world");
// }
// hello();
// console.log("this is a synchronous programming ");
// const hello = () => {
//     setTimeout(() => {
//         console.log("hello,world!");
//     },2000)
// }
// hello();
// console.log("this is a synchonous programming");
// callback,promises,async/await
function add(n1,n2,callback){
    console.log(n1+n2);
    callback();
}
let a=10;
let b=20;
add(a,b,sayHi);
add (a,b,hello);
//add(hello,sayHi);
function sayHi(){
    console.log("this is a callback function");
}
function hello(){
    console.log("hello,world!");
}
// create a function display(callback) that print "welcome to abes",then callback which print learning"FSD in CSE21" 
// function add(n1,n2,callback)
// {
//     console.log(n1+n2);
//     callback();
// }
// let a=10;
// let b=50;
// add(a,b,)
// function display(callback)
// {
//     console.log("welcome to abes");
//     callback();
// }
// display(learing);
// function learning()
// {
//     console.log("fsd in cse 21")
// }
