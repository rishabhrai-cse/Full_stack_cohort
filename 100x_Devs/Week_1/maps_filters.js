// Arrow functions
// function sum(a,b){
//     return a+b;
// }
// const sum=(a,b)=>{
//     return a+b;
// }
// const ans=sum(1,2);
// console.log(ans);



// given an array,give me back a new array in which every value is multiplied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]


// Method 1
// const input=[1,2,3,4,5];
// const newArray=[];
// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray);



// Method 2
// function transform(i){
//     return i*2;
// }
// const ans=input.map(tranform);
// console.log(ans);
// const ans=input.map(function transform(i){
//     return i*2;
// });
// console.log(ans);


//filtering
//what if i tell , give me back all the even values from it

// const arr=[1,2,3,4,5];
// const newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// Method 2 using filter
const arr=[1,2,3,4,5];
// function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const ans=arr.filter(filterLogic);
// console.log(ans);
//filtering
const ans=arr.filter(function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
});
console.log(ans);