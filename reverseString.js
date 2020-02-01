// Reverse a String

// gnirtS a esreveR


function reverse(str){
  // check input str
  if(!str || (typeof str !=='string') ||str.length < 2){
    return 'Please put a string with at least 2 characters'
  }
  let reversed  = [];
  let totalItem = str.length -1;
  for(let count = totalItem; count >=0; count--){
    reversed.push(str[count]);
  }
  return reversed.join('');
}
//string split,reverse,join




console.log(reverse('Reverse a String'));