/**
 * cc: Copy Color
 * @param {*} color 
 * @param {*} element 
 */
var picked = "frontend";
function cc(color, element)
{
	new Clipboard('.block', {
		container: element
	});

	// apply background color
	// apply front color
	var pane = document.getElementById("testing-pane");
	if(picked=="frontend")
	{
		document.getElementById("frontend").innerHTML = color;
		pane.style.color = color;
	}
	else
	{
		document.getElementById("background").innerHTML = color;
		pane.style.backgroundColor = color;
	}
}