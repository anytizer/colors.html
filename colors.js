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
}