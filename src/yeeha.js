// input integer
export function yeeha(num){
  // processing
  let result = "";

  if(num % 3 === 0 && num % 7 === 0){
    result = "Yee Ha";
  }else if(num % 3 === 0){
    result = "Yee";
  }else if(num % 7 === 0){
    result = "Ha";
  }else{
    result = "Nada";
  }

  // output
  return result;
}
