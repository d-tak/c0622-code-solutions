/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) - Constant Time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n) - Linear Time?
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 2 * n = O(n) ~= 0(n)
    if (!seen[word]) {              // 3 * n = O(n)
      seen[word] = true;            // 2 * n = O(n) ~= 0(n)
      unique[unique.length] = word; // 3 * n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

// for ever leetter in ABCD, look at every letter.
// A
// ABCD
// B
// ABCD
// C
// ABCD - at every point, we must start over from A.

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 3 * n = O(2n) ~= 0(n) - linear time
    i++                             // 2 * n = O(2n) ~= 0(n) (addition and assignment)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n) NESTED LOOP! (every iteration of the outer loop, this will start over)
      c < i;                        // 2 * n * n = O(2n^2) ~= 0(n^2) (n * n because it will run for the outer for loop AND the inner for loop) - Quadratic Time
      c++                           // 2 * n * n = O(2n^2) ~= 0(n^2)
    ) {
      const comparing = words[c];   // 2 * n * n = O(2n^2) ~= 0(n^2) (accessing words at C and assignment)
      if (comparing === word) {     // 2 * n * n = O(2n^2) ~= 0(n^2) (checking condition to see if true, evaluate comparison)
        isUnique = false;           // 1 * n * n = O(n) (reassignment)
      }
    }
    if (isUnique) {                 // 1 * n = O(n) - linear time
      unique[unique.length] = word; // 3 * n = O(n) (accessing length, assignment of word, and accessing unique)
    }
  }
  return unique;                    // 1 * 1 = O(1) // constant
} // Big O Notation for uniqueQuadratic: O(n^2) // take the WORST time complexity of the algorithm.
