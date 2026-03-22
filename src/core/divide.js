/**
 * Divides two numbers safely
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
// re-trigger
// clean test
