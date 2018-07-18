function add(a, b) {
  return a + b;
}

test('should return the correct value ', () => {
  expect(add(1, 4)).toBe(5);
});

// Jest will look for test files with any of the following popular naming conventions:

// Files with .js suffix in __tests__ folders.
// Files with .test.js suffix.
// Files with .spec.js suffix.
