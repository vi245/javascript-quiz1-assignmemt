// Print the fibonacci sequence

let seriesUpToNum=8;

// create fibonacci sequence function

const fibonacciSeries=(seriesUpToNum)=>{
    let firstNum=0;
    let secondNum=1;
    if(seriesUpToNum===0||seriesUpToNum===1)
    {
        console.log(seriesUpToNum);
    }
    else{
        let i=0;
        while(i<seriesUpToNum)
        {
            if(i===0 || i===1)
            {
                console.log(i + " ");
            }
            else
            {
            let newNum=firstNum+secondNum;
            firstNum=secondNum;
            secondNum=newNum;
            console.log(newNum + " ");
            }
            i++;
        }
    }
}
//call fibonacci Series function
fibonacciSeries(seriesUpToNum);