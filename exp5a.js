const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject('Invalid input. Please enter valid numbers.');
      return;
    }

    switch (operation) {
      case 'add':
        resolve(num1 + num2);
        break;
      case 'subtract':
        resolve(num1 - num2);
        break;
      case 'multiply':
        resolve(num1 * num2);
        break;
      case 'divide':
        if (num2 === 0) {
          reject('Division by zero is not allowed.');
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject('Invalid operation. Please choose from add, subtract, multiply, or divide.');
    }
  });
}

rl.question('Enter the first number: ', (num1Input) => {
  rl.question('Enter the second number: ', (num2Input) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operationInput) => {
      const num1 = parseFloat(num1Input);
      const num2 = parseFloat(num2Input);
      const operation = operationInput.toLowerCase();

      calculate(num1, num2, operation)
        .then((result) => {
          console.log('Result:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
          rl.close();
        });
    });
  });
});
