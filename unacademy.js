//1. Map Vs forEach 

// let arr=[1,2,3,4]
// // let resultOfForeach=arr.forEach((value,index)=>{
// //      arr[index]=value*4
// // })
// // console.log(resultOfForeach)
// let resultOfMap=arr.map((value,index)=>{
//     return arr[index]=value*3
// }).filter(value=>{
//     return value>4 ? value:""
// })
// console.log(resultOfMap,arr)

// 2. null vs undefined 


//  console.log(typeof(null))
//  console.log(typeof(undefined))
// console.log(null == undefined);
// console.log(null===undefined)

// 3. Event delegation

// document.querySelector("#products")
// .addEventListener(
//     "click",(event)=>{
//         console.log(event);
//         if(event.target.tagName==='LI'){
//             window.location.href += "#" + event.target.id ;
        
//         }
//     }
// )

// 4. Flatten the Array 

// let array=[
//     [1,2],
//     [2,3],
//     [4,[5,6],7]
// ]

// // let result=[].concat(...array)
// let result=new Set(array.flat(2))
// let re=[...result]
// // console.log(result)
// console.log(re)


// Round2:
// 1. var,let and const 
// var name="L"
// function demo(){
//     let name="Kalyan";
//     // // console.log(name)
//     // return name
// }

// demo();
// console.log(name)

// 2. setTimeout 
// function a(){
//     for(var i=0;i<3;i++){

//  setTimeout(function log(){
//      console.log(i)
//  },i*1000)
//     }
// }

// a()

// output is : 3 3 3


// 3. call,apply &bind 


// var person={
//     name:"Kalyan",
//     greetings:function (thing){
//         console.log(this.name+ " Says hello"+ thing)
//     }
// }
// var emp={
//     name:"Kalyan Ram"
// }

// person.greetings("world")
// person.greetings.call(emp,"world")
// person.greetings.apply(emp,["w","d"])
// const newemp=person.greetings.bind(emp)
// console.log(newemp("world"))

// 4. infinite currying 

// add(1)(2)(3)...AbortController(n)()


// 5. composition polyfill

// function addFive(a){
//     return a+5
// }
// function subtractTwo(a){
//     return a-2
// }
// function multiplyFour(a){
//     return a*4
// }

// const compose=(...functions)=>{
//     return (args)=>{
//         return functions.reduce((arg,fn)=>
//             fn(arg),args)
        
//     }

// }

// const result=compose(addFive,subtractTwo,multiplyFour)
// console.log(result(5))

// 6. Promise.all 

function showText(text,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },time)
    })
}

Promise.all([showText('hello',1000),Promise.resolve("Good")])
.then(value => console.log(value)).catch(err => Promise.reject(error))


// function myPromises(promises){
//     let result=[];
//     return new Promise((resolve,reject)=>{
//                          promises.forEach((p,index) => {
//                              p.then( res =>{
//                                  result.push(p);
//                                  if(index === promises.length -1){
//                                      resolve(result)
//                                  }
//                              }).catch(err=>reject(err))
//                          });
//     })

// }

// myPromises([showText('hello',1000),Promise.resolve("Good")])
//  .then(value => console.log(value))
