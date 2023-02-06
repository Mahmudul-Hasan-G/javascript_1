

//I tried to give the variable name by the number of problem

//First problem


//In this function is only for normal algebra 

function mindGame(num1){
  let result1 = num1;
  if(result1>0){
    result1=result1*3;
    result1=result1+10;
    result1=result1/2;
    result1=result1-5;
  }
  else{
    console.log("Please input a positive number !");
    }

  return result1;
}

const number1=33;
const finalResult1= mindGame(number1);
console.log(finalResult1);


//Second Problem


// function for compering by using If else statement

function evenOdd(word2){
  let result2="";
  if(word2.length % 2 == 0){
    result2 = "even";
  }
  else{
    result2 = "odd";
  }
  return result2;
}


const word = "chatgpt";
const finalResult2 = evenOdd(word);
console.log(finalResult2);


//Third problem



// function for compering by using If else statement

function isLGSeven(num3){
  let difference = num3-7;
  let result3=0;
  if(difference<7){
result3 = difference;
  }
  else{
    result3 = num3*2;
  }
  return result3
}

const number3 = 6;
const finalResult3 = isLGSeven(number3);
console.log(finalResult3);




//Fourth Problem


//Function returns a result by using For loop and if statement

function findingBadData(num4){
  let result4 = 0;
  let badData = [];
  for(let i=0;i<num4.length;i++){
    let data = num4[i];
    if(data<0){
badData.push(data);
    }

  }
  result4 = badData.length;
  return result4;
}


const number4 = [-5, -7, -13, -6, -8];
const finalResult4 = findingBadData(number4);
console.log(finalResult4);


//Fifth problem




//function contain multiple parameter

function gemsToDiamond(f1Gem, f2Gem, f3Gem){
let totalDiamond = (f1Gem*21)+(f2Gem*32)+(f3Gem*43);
let result5 =0;
if(totalDiamond>2000){
  result5 = totalDiamond -2000;
}
else{
  result5 = totalDiamond;
}
return result5;
}


const gems1 = 100;
const gems2 = 5;
const gems3 = 1;
const finalResult5 = gemsToDiamond(gems1, gems2, gems3);
console.log(finalResult5);