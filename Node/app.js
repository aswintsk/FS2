// eg1
// function greet(name,callback){
//     console.log("Hello "+name)
//     callback()
// }
// function sayBye(){
//     console.log("Goodbye")
// }

// greet("AST",sayBye)




//eg2
// const fs = require('fs')

// fs.readFile('file.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })



// Q1

// function add(a,b,callback){
//     console.log("a: "+a)
//     console.log("b: "+b)
//     console.log("Sum: "+callback(a,b))
// }

// function sum(a,b){
//     return (a+b)
// }

// add(3,3,sum)




// // Q2
// const fs = require('fs')

// fs.readFile("info.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// }) 



// // Q3
// function mainFn(a,b,callback1,callback2){
//     console.log("******************")
    
//     console.log("a: "+a)
//     console.log("b: "+b)
//     r = callback1(a,b)
//     console.log("Sum: "+r)
//     callback2(r)

//     console.log("******************")
// }

// function callback1(a,b){
//     return (a+b)
// }

// function callback2(r){
//     console.log(r+ " x 10: "+ (r*10))
// }

// mainFn(5,2,callback1,callback2)






// Eg3 event loop in action

// console.log("Start")

// setTimeout(()=>{
//     console.log("Inside set timeout")
// },1200)

// console.log("End")


// Q4


// function countdown(s){
//     for (let index = s; index >=0; index--) {
//         // console.log(index)
//         setTimeout(()=>{
//             console.log(index==0?"times up":index)}
//             ,(s-index)*1000)
//     } 
// }
// countdown(10)

// Q5
// const EventEmmiter = require('events')
// const myEmmiter  = new EventEmmiter()

// myEmmiter.on("greet",()=>{
//     console.log("Hello from Event Emmiter")
// })

// myEmmiter.emit('greet')


// Q6

// const EvEm = require("events")
// const myEm = new EvEm()

// myEm.on('login',printU)

// function printU(uname){
//     console.log(uname + " has logged in")
// }

// myEm.emit('login','ast')



// Buffer 

// const buffer = Buffer.from("Hello")
// console.log(buffer)

// console.log(buffer.toString())

// // Change buffer content
// buffer[0]= 66

// console.log(buffer.toString())




// Q7
// const buffer = Buffer.from("Node.js")
// console.log(buffer.toString())
// console.log(buffer)
// console.log("**** B -> C ****")
// buffer[0]=67
// console.log(buffer)
// console.log(buffer.toString())




// Read file from Stream

const fs = require('fs')

// const readStream = fs.createReadStream('Exercise.txt','utf8')

// readStream.on('data',(chunk)=>{
//     console.log('Chunk: ',chunk)
// })

// readStream.on('end',()=>{
//     console.log('Finished Reading')
// })   


// Write to file

// fs.writeFile('op.txt',"hello, node!",(er)=>{
//     if(er) throw er
//     console.log("File created and written succesfuly")
// })

fs.writeFile('welcome.txt',"Welocome to Node.js",(err)=>{
    if(err) throw err
    console.log("File Created And Written succesfuly")
})

