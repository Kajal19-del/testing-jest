const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Kajal', 23);
  expect(text).toBe('Kajal (23 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Kajal', 23);
  expect(text).toBe('Kajal (23 years old)')
})