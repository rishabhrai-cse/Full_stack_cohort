//Write a function called sum that finds the sum from 1 to a number

function sum(num){
    let sum1=0;
    for(let i=1;i<=num;i++){
        sum1=sum1+i;
    }
    return sum1;
}

let result=sum(5);
console.log(result);