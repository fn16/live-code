


function numberCruncher(inputArray) {
var Arr1=[];

var total = 0;

console.log("Proses =>");

for (var i = 0 ; i < inputArray.length; i++) {
	
	if(i === 0){
		Arr1.push(inputArray[i]+0+ inputArray[i+1]);
		process.stdout.write("("+ inputArray[i]+ " + "+ 0 + " + "+ inputArray[i+1] +")");
	}

	if (i !== 0 && i !== inputArray.length - 1) {
		Arr1.push(inputArray[i] + inputArray[i - 1]  + inputArray[i+1]);

		process.stdout.write("("+ inputArray[i] + " + "+ inputArray[i - 1] + " + "+ inputArray[i+1] + ")");
		
	}

	if(i === inputArray.length -1 ){
		Arr1.push(inputArray[i] + inputArray[i-1]+0);
		process.stdout.write("("+ inputArray[i] + " + "+ inputArray[i-1] + " + "+ 0 +")");
		
	}	

}
console.log();


for(var j = 0 ; j< Arr1.length; j++){
	
	process.stdout.write(Arr1[j]+" ");
	//console.log(Arr1[j]);
}

console.log(" ");
     process.stdout.write("Nilai Ganjil: ");

for(var j = 0 ; j< Arr1.length; j++){
	var s;
	if(Arr1[j] % 2 ){
		total += Arr1[j];
     process.stdout.write(Arr1[j]+" Dan ");

		
	}
	
}
console.log(" ");
console.log("Output: "+total);
return total ;
}

numberCruncher([2,5,1,3]);

