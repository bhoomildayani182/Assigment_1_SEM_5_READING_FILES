var fs = require("fs")
const {ADD,SUB}=require('./calculator')
const file1 = fs.readFileSync('input.txt', 'utf8')

const arr = [];
const arrOutput = [];
file1.split(/\r?\n/).forEach(line =>  {
    arr.push(line)
});
for(let i = 0; i < arr.length/3; i++){
    let a = arr[i*3 + 0];
    let b = arr[i*3 + 1];
    let c = arr[i*3 + 2];
    a = parseInt(a);
    b = parseInt(b);
    if(c === "ADD"){
        let d=ADD(a,b)
        arrOutput.push((d))
    } else if( c === "SUB") {
        let d=SUB(a,b)
        arrOutput.push((d))
    } else if( c === "MUL") {
        let d=SUB(a,b)
        arrOutput.push((d))
    } else if( c === "SUB") {
        let d=DIV(a,b)
        arrOutput.push((d))
    }
    console.log(arrOutput)
    
}
for(let i = 0; i < arrOutput.length; i++){
    fs.appendFileSync('output.txt', arrOutput[i]+ "\n")
}
console.log("file read")