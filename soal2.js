function numberCruncher(inputArray) {

var newArr=[];

for (let i = 0 ; i < inputArray.length; i++) {
	
	if (i!== 0 && i !== inputArray.length - 1) {
		newArr.push(inputArray[i - 1] + inputArray[i] + inputArray[i+1]);
	}

	if(i=== 0){
		newArr.push(0 + inputArray[i]+ inputArray[i+1]);
	}

	if(i=== inputArray.length -1 ){
		newArr.push(inputArray[i+1] + inputArray[i]+0);
	}
}

var total = 0;
for(let j =0 ; j< newArr.length; j++){

	if(newArr[j] %2 !== 0){
		total +=newArr[j];
	}
}
return total ;
}
