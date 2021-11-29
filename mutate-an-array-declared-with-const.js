const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let a = s.pop();
  // Using s = [2, 5, 7] would be invalid
  s.unshift(a);
  // Only change code above this line
}
editInPlace();