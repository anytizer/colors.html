/**
 * cc: Copy Color
 * @param {*} color 
 * @param {*} element 
 */
function cc(color, element)
{
	new Clipboard('.block', {
		container: element
	});

	setColor(color);
}

var picked = "frontend";
function setColor(color)
{
	// apply background color
	// apply front color
	var pane = document.getElementById("testing-pane");
	if(picked=="frontend")
	{
		pane.style.color = color;
		localStorage.setItem("frontend", color);
		document.getElementById("frontend-text").innerHTML = color;
	}
	else
	{
		pane.style.backgroundColor = color;
		localStorage.setItem("background", color);
		document.getElementById("background-text").innerHTML = color;
	}
}

function onloadInitiateColors(){
	if(color = localStorage.getItem("frontcolor"))
	{
		picked = "frontend";
		setColor(color);
	}

	if(color = localStorage.getItem("background"))
	{
		picked = "background";
		setColor(color);
	}
};
window.addEventListener("load", onloadInitiateColors, false);