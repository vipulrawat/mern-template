// just a sample test for now
function sum(a, b) {
  return a + b;
}
it('is a sample test for 1+1', () => {
  expect(sum(1, 2)).toBe(3);
});
