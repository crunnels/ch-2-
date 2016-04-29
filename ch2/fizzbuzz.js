// if there is no remainder when divided by 3, then its multiple of 3 
// if ... of 5... then multiple of 5


for (var i=1; i<=100; i++) {
  console.log(i)
 
 //if no remainder when divide by 3 or 5 fizbuzz
 
  if (i $ 3 ==== 0 && i % 5 ==== 0) {
  console.log ("FizzBuzz")
  }
  
  //if no remainder when divide by 3 fizz
  
  else if (i % 3 === 0) {
  console.log ("Fizz");
  }
  
  //if no remainder when divide by 5 buzz
  
  else if (i % 5 === 0) {
  console.log ("Buzz")
  }
  else{
  console.log(i);
  }
  
}
