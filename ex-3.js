// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here

for (let i = 0; i < numbers[i]; i++ ){
    if(numbers[i] < minNumber || i === 0){
        minNumber = numbers[i];
    }
}

console.log(minNumber)