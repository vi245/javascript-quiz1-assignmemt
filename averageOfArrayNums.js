// Average of array numbers

// take an array

let arrayOfNums=[2,3,4,5,6];

//create an function to calculate average

const averageOfArrayNums=(arrayOfNums)=>{
    let sum=0;
    // used forEach to iterate over an array
    arrayOfNums.forEach(num => {
        sum=sum+num;
    });
    let average=sum/arrayOfNums.length;
    console.log("Average of array Numbers is" + " "+average);
}

// call the average function

averageOfArrayNums(arrayOfNums);