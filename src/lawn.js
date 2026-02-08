// input width, length, cut rate
export function lawn(width, length, rate){
  // processing
  let area = width * length;
  let minutes = area / rate;

  // output
  return minutes;
}