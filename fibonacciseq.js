// Write a function to return an n element in Fibonacci sequence

// Non Recursive

function fibonacci(num){
  let array = [0,1,1];
  // start off array
  if (num < 1){
    return 'please enter a positive number'
  }
  if (num === 1){
    return 0;
  }
  if (num === 2 || num === 3){
    return 1;
  }
  if (num>3){
  for(let i=0;i<num-2;i++){
    array.push((array[array.length-2]+array[array.length-1]))
    }
  }
  return array[num-1]
}

fibonacci(8)




// Recursive

function fibby(x){
  if(x<=1){  // end conditional
     return 1
  }
  return fibby(x-1) + fibby(x-2)
};

fibby(7)


