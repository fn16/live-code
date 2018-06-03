function digitsGrouper(numbers) {
  var satuDigit = []
  var duaDigit = []
  var tigaDigit = []
  var empatDigit = []
  var strNum = []
  for(var j=0; j<numbers.length; j++){
    strNum.push(''+numbers[j])
  }
  for(var i=0; i<strNum.length;i++){
    if(strNum[i].length===1){
      satuDigit.push(strNum[i])
    }else if(strNum[i].length===2){
      duaDigit.push(strNum[i])
    }else if(strNum[i].length===3){
      tigaDigit.push(strNum[i])
    }else{
      empatDigit.push(strNum[i])
    }
  }
  var arrHasil =[]
  arrHasil.push(satuDigit, duaDigit, tigaDigit, empatDigit)
  return arrHasil

}
console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]