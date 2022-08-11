const burgerIconOnn = document.querySelector(".menu-nav__hamburger");
const sideMenu = document.querySelector(".side-menu__list");
const navbar = document.querySelector(".navbar");

burgerIconOnn.addEventListener("mouseenter", () => {
	sideMenu.style.marginLeft = "0px";
});

navbar.addEventListener("mouseleave", () => {
	sideMenu.style.marginLeft = "-300px";
});

const colorGrey = "#c2c2c2";
const colorRed = "#ec4444";
const colorOrange = "#e8911e";
const colorPurple = "#8b3190";
const colorGreen = "#4abb4d";

const colorChoice = function (selector, backgroundColor) {
	let chooseColor = document.querySelector(selector);
	chooseColor.addEventListener("click", () => {
		document.body.style.backgroundColor = backgroundColor;
		chooseColor.checked = true;
		sideMenu.style.marginLeft = "-250px";
	});
};

colorChoice(".grey", colorGrey, "grey", "#c2c2c2");
colorChoice(".red", colorRed, "red", "#ec4444");
colorChoice(".orange", colorOrange, "orange", "#e8911e");
colorChoice(".purple", colorPurple, "purple", "#8b3190");
colorChoice(".green", colorGreen, "green", "#4abb4d");
