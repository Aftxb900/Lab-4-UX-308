// input square feet
export function acres(squareFeet){
  // processing
  let result = 0;

  result = squareFeet / 43560;

  // output
  return result;
}