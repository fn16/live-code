
var polaAngkaPerbaris;
var polaAngka = [1,2,3];
var i ;
var tambah = 3;

function drawThreeColsBox(height) {
	

	for(i = 0; i<height; i ++){

		if(i==0){

			 polaAngkaPerbaris = String(polaAngka[0]) + ' ' + String(polaAngka[1])+ ' '+ String(polaAngka[2]);
		}
		else{

			polaAngka[0]= polaAngka[0] + tambah;
			polaAngka[1]= polaAngka[1] + tambah;
			polaAngka[2]= polaAngka[2] + tambah;
		    polaAngkaPerbaris = String(polaAngka[0]) + ' ' + String(polaAngka[1])+ ' '+ String(polaAngka[2]);
		}

		console.log(polaAngkaPerbaris);
	}
}

drawThreeColsBox(20);