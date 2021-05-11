/*var myVar = setInterval(changeColor, 1000);
	function changeColor()
			 {
				if(document.getElementById("billboard").getAttribute('diffuseColor')=="0.9 0.9 0.9")
				   document.getElementById("billboard").setAttribute('diffuseColor', '1 1 0');
				else
				   document.getElementById("billboard").setAttribute('diffuseColor', '0.9 0.9 0.9');
			 }*/
var myVar2 = setInterval(changeColor2, 500);
function changeColor2() {
  if (document.getElementById("neon").getAttribute("diffuseColor") == "1 1 1")
    document.getElementById("neon").setAttribute("diffuseColor", "1 0 0");
  else document.getElementById("neon").setAttribute("diffuseColor", "1 1 1");
}

var myVar3 = setInterval(changeColor3, 1500);
function changeColor3() {
  if (
    document.getElementById("ball").getAttribute("diffuseColor") ==
    "0.9 0.9 0.9"
  )
    document.getElementById("ball").setAttribute("diffuseColor", "1 1 0");
  else
    document.getElementById("ball").setAttribute("diffuseColor", "0.9 0.9 0.9");
}
var myVar4 = setInterval(changeColor4, 1000);
function changeColor4() {
  if (
    document.getElementById("dome").getAttribute("diffuseColor") ==
    "0.9 0.9 0.9"
  )
    document.getElementById("dome").setAttribute("diffuseColor", "0 1 0");
  else
    document.getElementById("dome").setAttribute("diffuseColor", "0.9 0.9 0.9");
}

var myNewVar = setInterval(changeSign, 1000);
function changeSign() {
  if (document.getElementById("drink").getAttribute("url") == "drink.png")
    document.getElementById("drink").setAttribute("url", "coke.png");
  else document.getElementById("drink").setAttribute("url", "drink.png");
}
