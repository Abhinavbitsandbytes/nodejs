

// Nested promise(not redable just like callback hell. solution? - promise chaining :) ----------------------

// const add = (a,b) =>{
// return new Promise((resolve, reject) =>{

//     setTimeout(() => {
//     resolve (a+b)
//     }, 2000);
// })
// }
// add(1,2).then((sum)=>{
// console.log(sum)

// add(sum, 5).then((sum2)=>{
//     console.log(sum2)
// }).catch((error)=>{
//     console.log(error)
// })


// }).catch((error)=>{
//     console.log(error)
// })

//promise chaining below

const add = (a,b) =>{
return new Promise((resolve, reject) =>{

    setTimeout(() => {
    resolve (a+b)
    }, 2000);
})
}

add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((error)=>{
    console.log(error)
})