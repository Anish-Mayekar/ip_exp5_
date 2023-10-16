function* generatePrimes(limit) {
  if (limit < 2) return;

  yield 2;

  const primes = [2];
  let currentNumber = 3;

  while (currentNumber <= limit) {
    if (isPrime(currentNumber, primes)) {
      primes.push(currentNumber);
      yield currentNumber;
    }
    currentNumber += 2;  
  }
}

function isPrime(number, primes) {
  for (const prime of primes) {
    if (prime * prime > number) break;
    if (number % prime === 0) return false;
  }
  return true;
}

const limit = 15;
const primeGenerator = generatePrimes(limit);

console.log(`Prime numbers up to ${limit}:`);

for (const prime of primeGenerator) {
  console.log(prime);
