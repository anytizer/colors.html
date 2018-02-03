var picked = null;

/**
 * Auto determine the background or front color to apply
 * @param #RRGGBB color 
 */
function setColor(color)
{
	// apply background color
	// apply front color
	
	if(picked=="frontcolor")
	{
		setFrontColor(color);
	}
	else
	{
		setBackgroundColor(color);
	}
}

/**
 * Always set front color
 * @param #RRGGBB color 
 */
function setFrontColor(color)
{
	var pane = document.getElementById("testing-pane");
	pane.style.color = color;
	document.getElementById("frontend-text").innerHTML = color;
	localStorage.setItem("frontcolor", color);
}

/**
 * Always set background color
 * @param #RRGGBB color 
 */
function setBackgroundColor(color)
{
	var pane = document.getElementById("testing-pane");
	pane.style.backgroundColor = color;
	localStorage.setItem("background", color);
	document.getElementById("background-text").innerHTML = color;
}

/**
 * When the page loads
 */
function onloadInitiateColors(){
	if(!picked)
	{
		picked = "frontcolor";
	}
	
	var local_frontend_color = localStorage.getItem("frontcolor");
	if(!local_frontend_color) local_frontend_color = "#000000";
	setFrontColor(local_frontend_color);
	
	var local_background_color = localStorage.getItem("background");
	if(!local_background_color) local_background_color = "#FFFFFF";
	setBackgroundColor(local_background_color);
}

window.addEventListener("load", onloadInitiateColors, false);

/**
 * cc: Copy color into memory
 * And set the UX color
 */
function cc(color, element)
{
	new Clipboard('.block', {
		container: element
	});

	setColor(color);
}
