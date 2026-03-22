import { divide } from '../src/core/divide.js';

console.assert(divide(10, 2) === 5, 'divide(10,2) should be 5');
console.assert(divide(7, 2) === 3.5, 'divide(7,2) should be 3.5');

try {
  divide(1, 0);
  console.assert(false, 'Should have thrown');
} catch (e) {
  console.assert(e.message === 'Division by zero');
}

console.log('All divide tests passed!');
