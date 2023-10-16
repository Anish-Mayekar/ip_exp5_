const numbers = [1, 2, 3, 4, 5];

const numberIterator = numbers[Symbol.iterator]();

const squares = [];

for (let value of numberIterator) {
  squares.push(value * value);
}

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squares);


