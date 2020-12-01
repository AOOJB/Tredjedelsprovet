/*Uppg 1*/

function omvandlaTimTillSek (h){
	var sek = h * 3600;
	return sek;
}

console.log(omvandlaTimTillSek(10));

/*Uppg 2*/

function störstatal(tal1, tal2, tal3){
	if(tal1 > tal2 && tal1 > tal3){
		return tal1;
	}
	else if(tal2 > tal1 && tal2 > tal3){
		return tal2;
	}
	else
		return tal3;
}
console.log(störstatal(12, 14, 12));

/*Uppg 3*/

var array = [true,false,true,false,true,false];
var array1 = [0,1,0,1,0,1,0,1];

function count_true(boolarray){
	var antaltrue = 0;
	for(let i = 0; i < boolarray.length; i++){
		if(boolarray[i] === true){
			antaltrue++;
		}
	}
	return antaltrue;
}
console.log(count_true(array));
console.log(count_true(array1));

/*Uppg 4*/

function pair(n){
	var array = [];
	if(n == 0){
		console.log("0 går inte");
	}
	if(n % 2 == 0){
		arraynummerjämnt = n/2;
		array += arraynummerjämnt;
		array += arraynummerjämnt;
	}
	if(n % 2 !== 0){
		arraynummerudda1 = Math.ceil(n/2);
		arraynummerudda2 = Math.floor(n/2);
		if(n > 0){
			if(arraynummerudda1 > arraynummerudda2){
				array += arraynummerudda1;
				array += arraynummerudda2;
			}
			if(arraynummerudda2 > arraynummerudda1){
				array += arraynummerudda2;
				array += arraynummerudda1;
			}
		}
		if(n < 0){
			if(arraynummerudda1 > arraynummerudda2){
				array += arraynummerudda2;
				array += arraynummerudda1;
			}
			if(arraynummerudda2 > arraynummerudda1){
				array += arraynummerudda1;
				array += arraynummerudda2;
			}	
		}
	}
	return array;
}
console.log(pair(0));
console.log(pair(7));
console.log(pair(8));
console.log(pair(-7));

/*Uppg 5*/
function Difference(tal1,tal2){
	if(tal1 >= tal2){
		difference = tal1 - tal2;
	}
	if(tal2 >= tal1){
		difference = tal2 - tal1;
	}
	return difference;
}

function Distance(kord1, kord2){
	var kord1x = kord1[0];
	var kord1y = kord1[1];
	var kord2x = kord2[0];
	var kord2y = kord2[1];

	var differencex = Difference(kord1x, kord2x)
	var differencey = Difference(kord1y, kord2y)

	distance = Math.sqrt((differencex * differencex) + (differencey * differencey));
	return distance;
}

console.log(Distance([0,0],[3,4]));
console.log(Distance([3,4],[3,4]));

/*Uppg 6*/

function removeChars(text, remove){
	for(i = 0; i < text.length; i++){
		for(j = 0; j < remove.length; j++){
			if(text[i] == remove[j]){
				text = text.replace(text[i], "?");
			}
		}
	}
	return text;
}

console.log(removeChars("Dancollin", "an"));

/*Uppg 7*/

function Overlappning(rektangel1, rektangel2){
	if(rektangel1[0] + rektangel1[2] > rektangel2[0]){
		var overlappingx = true;
	}
	if(rektangel1[0] + rektangel1[2] < rektangel2[0]){
		var overlappingx = false;
	}
	if(rektangel1[1] + rektangel1[3] > rektangel2[1]){
		var overlappingy = true;
	}
	if(rektangel1[1] + rektangel1[3] < rektangel2[1]){
		var overlappingy = false;
	}
	if(overlappingx == true && overlappingy == true){
		return true;
	}
	else{
		return false;
	}
}

console.log(Overlappning([0,0,10,10],[5,5,10,10]));
console.log(Overlappning([0,0,20,20],[21,21,5,5]));

/*Uppg 8*/

function Frekvens(str){
	var frekvensarray = [];
	for(let i = 0; i < str.length; i++){
		frekvensarray += str[i];
		for(let j = i; j > 0; j--){
			
		}
	}
}

/*Uppg 9*/

function Summa(n){
	var summa = 0;
	for(let i = n; n > 0; n--){
		summa += n;
	}
	return summa;
}

console.log(Summa(5));