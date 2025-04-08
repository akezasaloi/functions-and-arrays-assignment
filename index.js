// Question 1
function sortedReversedArray(strings = []){
    let sortedArray = strings.sort().reverse();
    sortedArray.forEach((item,index) =>{
    sortedArray[index] = item.split("").reverse().sort().join("");
    
});
return sortedArray;
};

console.log(sortedReversedArray([`banana`, `pineaple`,`grapes`,`strawberries`]));



//Question 2
function arrayOfNumbers(num1){
num1.forEach(element => {
    if(element > 0){
        console.log(`Positive`);       
    }
    else{
        console.log(`Negative`);
    }
});
};

arrayOfNumbers([12,-3,-5,6]);


//Question 3
function employeeProfile(profile){
    return profile.sort((a, b)=>a.salary-b.salary);
    };
    
    const employeeDetails = employeeProfile([{id:1,name:"Akeza",salary:2600},
    {id:2,name:"Saloi",salary:500}]);
    
    console.log(employeeDetails);



// Question 4

function multiplesOfTwo(arrayOfMultiplesOfTwo = []){
    arrayOfMultiplesOfTwo.forEach((element,index)=>{
    arrayOfMultiplesOfTwo[index] = element*2 ;
    });
    return arrayOfMultiplesOfTwo;
};

console.log(multiplesOfTwo([1,2,3,4,5,6,7]));

//Question 5

function numbers(numbersArray){
    numbersArray.forEach((item,index)=>{
        if(index<4){
            console.log(`${item*8}`)
        } else if(index >= numbersArray.length-2){
            console.log(`${item+5}`)
        }
    })
}
numbers([5,7,4,0,23,1]);
