function mergeSortedArrays(arr1,arr2){
  //checking input
  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length ===0){
    return arr1
  }
  // declare output
  let mergedArray = [];
  //get first Item
  let array1FirstItem = arr1[0];
  let array2FirstItem = arr2[0];
  let i = 1;
  let j = 1;
  // loop through Items in array
  while(array2FirstItem || array1FirstItem ){
    // compare arrays items
    if(array2FirstItem === undefined || array1FirstItem < array2FirstItem ){
      mergedArray.push(array1FirstItem);
      array1FirstItem = arr1[i];
      i++;
    }else{
      mergedArray.push(array2FirstItem);
      array2FirstItem = arr2[j]
      j++;
    }
  }
  // return output
  return mergedArray;
  
}


console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));