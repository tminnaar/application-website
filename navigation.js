//returns an array of all the tab elements to iterate through in order to add styling id's to the selected tab and remove them from the rest.
function onClickTab(tabName) {
	const allTabs = document.getElementsByClassName("project-info");
	Array.from(allTabs).forEach((element) => {
		element.style.display = "none";
	});
	const selected = document.getElementsByClassName(tabName);
	Array.from(selected).forEach((element) => {
		element.style.display = "block";
	});
}
