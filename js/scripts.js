var buttonsArray = document.getElementsByClassName("button");
var buttonsNumber = buttonsArray.length-1;

for (var i = 0; i <= buttonsNumber; i++) {
	alert(buttonsArray[i].innerText);
}
