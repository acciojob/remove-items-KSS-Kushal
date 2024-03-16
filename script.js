//your JS code here. If required.
const handleClick = () => {
	const selectHTML = document.getElementById("colorSelect");
	const color = selectHTML.value;
	const colorList = selectHTML.options;
	for (let i = 0; i < colorList.length; i++) {
		if (colorList[i].innerHTML===color) {
			selectHTML.removeChild(colorList[i]);
		}
	}
}