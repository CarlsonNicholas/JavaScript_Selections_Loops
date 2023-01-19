console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Very Similar to C# Logically

for (let b =1; b <= 100; b += 2) {
  console.log(b);   
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Same as C# Just change the syntax

for (let f = 0; f < 101; f++)   {
    if (f % 3 == 0 && f % 5 == 0) {
        console.log("FizzBuzz")
    } else if (f % 3 == 0) {
        console.log("Fizz")
    } else if (f % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(f)
    } {
        
    } {
        
    }
}
//Exercise 3 
console.log("EXERCISE 3:\n==========\n");

let a = 1;

while (a <= 100) {
  if (a % 2 !== 0) {
    console.log(a);
  }
  a++;
}

let z = 1;

do {
  if (z % 2 !== 0) {
    console.log(z);
  }
  z++;
} while (z <= 100);


let yWhile = 0;

while (yWhile < 100) {
  if (yWhile % 3 == 0 && yWhile % 5 == 0) {
    console.log("FizzBuzz");
  } else if (yWhile % 3 == 0) {
    console.log("Fizz");
  } else if (yWhile % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(yWhile);
  }

  y++;
}



let yDo = 0;

do {
  if (yDo % 3 == 0 && yDo % 5 == 0) {
    console.log("FizzBuzz");
  } else if (yDo % 3 == 0) {
    console.log("Fizz");
  } else if (yDo % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(yDo);
  }

  yDo++;
} while (yDo < 100);

//console.log(`Exercise 4`)
console.log("EXERCISE 4:\n==========\n");
//In this exercise, you will count from iterate from 1 to n. 
//If you iterate over a given value, then break out the loop and print "Found value!". 
//If you do not find the value in the given range, print "Did not find value".

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log(`Value`)
console.log(value)
console.log(`n`)
console.log(n)
for (let indicator = 1; indicator <= n; indicator++) {
    if (indicator === value) {
      console.log("Found value!");
      break;
    }
  
  
  if (indicator > n) {
    console.log("Did not find value");
  }

}
  let altIndicator = 1;

while (altIndicator <= n) {
  if (altIndicator === value) {
    console.log("Found value!");
    break;
  }
  altIndicator++;
}

if (altIndicator > n) {
  console.log("Did not find value");
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
//Start with the following code:

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let finish = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

//Re-implement exercise 2, but use `start` as the initial value for
// `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as 
//the dependent values for determining "FIZZ" and "BUZZ" print messages.


for (let initalizer = start; initalizer <= finish; initalizer++) {
    if (initalizer % fizzDivisor === 0 && initalizer % buzzDivisor === 0) {
      console.log("FIZZBUZZ");
    } else if (initalizer % fizzDivisor === 0) {
      console.log("FIZZ");
    } else if (initalizer % buzzDivisor === 0) {
      console.log("BUZZ");
    } else {
      console.log(initalizer);
    }
  }