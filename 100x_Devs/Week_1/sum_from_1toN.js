//Synchronous code
//Synchronous code is executed line by line, in the order it's written. 
//Each operation waits for the previous one to complete before moving on to the next one.
function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
const res=sum(10);
console.log(res);