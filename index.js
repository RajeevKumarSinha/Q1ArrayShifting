let execute = document.querySelector('.execute');
execute.addEventListener("click", execcuteFun);
function execcuteFun() {
    let N = window.prompt("enter length of the array");
    let p = window.prompt("enter no. of positions you would like to shift");
    if (p <= 0 || p >= N) {
        alert('Invalid entry position should be greater than 0 and less than length of Array.');
        p = window.prompt("enter no. of positions you would like to shift");
    }
    let d = window.prompt("enter 0 for left or 1 for right shifting.");
    let array = window.prompt("enter the array elements all at once by giving single space.");
    array = array.split(" ");
    const finalArray = array.slice(0,N);
//     console.log(finalArray);
//     console.log(`length of array ${N} \n positions to shift ${p}
//  \n direction to shift ${d} \n and Array is ${array}
//  ` );
    let output = document.querySelector('.solution-container');
    if(finalArray.length == N){
        if(d ==0){
            for(let i=0;i<p;i++){
                let swap = finalArray[0];
                finalArray.shift();
                finalArray.push(swap);
            }
        }else if( d==1){
            for(let i=0;i<p;i++){
                let swap =finalArray[N-1];
                finalArray.pop();
                finalArray.unshift(swap);
            }
        }
    }
    
    output.innerHTML=`<p>length of array = ${N}</p>
    <p>No. of positions to be shifted = ${p}</p>
    <p>Shift direction = ${0?"left":"right"}</p>
    <p>Original array = ${array.slice(0,N)}</p>
    <p>Shifted array is ${finalArray}</p>
    `
}