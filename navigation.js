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
