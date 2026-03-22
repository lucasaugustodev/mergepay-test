import { multiply, power } from '../src/core/multiply.js';

// Test multiply
console.assert(multiply(2, 3) === 6, 'multiply(2,3) should be 6');
console.assert(multiply(0, 5) === 0, 'multiply(0,5) should be 0');
console.assert(multiply(-1, 5) === -5, 'multiply(-1,5) should be -5');

// Test power
console.assert(power(2, 3) === 8, 'power(2,3) should be 8');
console.assert(power(5, 0) === 1, 'power(5,0) should be 1');

console.log('All multiply tests passed!');
