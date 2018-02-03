<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title>Colors Picker</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

	<link rel="stylesheet" type="text/css" href="colors.css" />
	<script src="clipboard.min.js"></script>
	<script src="colors.js"></script>
</head>

<body>
  
<div class="wrapper">
<?php
$colors = array(
	"00",
	#"11",
	#"22",
	"33",
	#"44",
	#"55",
	"66",
	#"77",
	#"88",
	"99",
	#"AA",
	#"BB",
	"CC",
	#"DD",
	#"EE",
	"FF"
);

// https://www.rapidtables.com/web/color/Web_Safe.html
// http://www.michelmichaud.com/colors.htm
// https://en.wikipedia.org/wiki/Web_colors

# Start as R -> G -> B
$colors = array_reverse($colors);

echo "<div class='b2'>";
foreach($colors as $red)
{
	echo "<div class='b2'>";
	foreach($colors as $green)
	{
		echo "<div class='b1'>";
		foreach($colors as $blue)
		{
			echo "<button onclick=\"cc('#{$red}{$green}{$blue}', this)\" data-clipboard-text='#{$red}{$green}{$blue}' class='block' style='background-color: #{$red}{$green}{$blue};' title='#{$red}{$green}{$blue}'></button>";
		}
		echo "</div>";
		echo "<br>";
	}
	echo "</div>";
}
echo "</div>";
?>

<p>Click and pick color code.</p>
<label><input type="radio" name="picked" onclick="picked='frontend'" checked="checked"> Front Color</label>
<label><input type="radio" name="picked" onclick="picked='backend'"> Background Color</label>

<div class="testing-pane" id="testing-pane">
	<h2>Testing Pane</h2>
	<div>Some other texts will appear here.</div>
	<div>Front Color: <span id="frontend-text">#choose</span>, Background Color: <span id="background-text">#choose</span></div>
</div>

</div>
</body>
</html>
