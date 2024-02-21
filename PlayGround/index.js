const util = require('util')
async function delay(duration = 1000){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(duration)
        },duration)
    })
}
const delayCallback = util.callbackify(delay)
console.log(delayCallback);