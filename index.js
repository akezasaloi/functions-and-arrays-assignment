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
function employeeProfile(profile = []){
    profile.forEach((item,index) => {
        profile[index]= item;
    });
return profile;
};

console.log(employeeProfile([
    {employeename:"Akeza",id:1,salary: 20000},
    {employeename:"Saloi",id: 2,salary: 3000}
]
)
);
// Question 4

function multiplesOfTwo(arrayOfMultiplesOfTwo = []){
    arrayOfMultiplesOfTwo.forEach((element,index)=>{
    arrayOfMultiplesOfTwo[index] = element*2 ;
    });
    return arrayOfMultiplesOfTwo;
};

console.log(multiplesOfTwo([1,2,3,4,5,6,7]));

//Question 5
function numbers(num2 = []){

    
    return num2;
};
console.log(numbers([2,3,4,5,9,8]))
