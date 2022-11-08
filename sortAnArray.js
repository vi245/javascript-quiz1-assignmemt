//Sort an Array by both Ascending and descending order

let arrayOfNums=[5,8,3,9,7,2,1,6];

const sortAnArrayByAscendingOrder=(arrayOfNums)=>{
    arrayOfNums.sort(compare=(a,b)=>{
        return a-b;
    })
    console.log("Array in ascending order is" )
    arrayOfNums.forEach(element => {
        console.log(element + " ");
    });
}
const sortAnArrayByDescendingOrder=(arrayOfNums)=>{
    arrayOfNums.sort(compare=(a,b)=>{
        return b-a;
    })
    console.log("Array in descending order is" )
    arrayOfNums.forEach(element => {
        console.log(element + " ");
    });
}
sortAnArrayByAscendingOrder(arrayOfNums);
sortAnArrayByDescendingOrder(arrayOfNums);