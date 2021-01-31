const colors = require("tailwindcss/colors");
const primary = {
	100: "#F0D1F9",
	200: "#DDA5F3",
	300: "#B872DB",
	400: "#8D4AB7",
	500: "#581C87",
	600: "#441474",
	700: "#330E61",
	800: "#24084E",
	900: "#190540",
};
const secondary = {
	100: "#C7F9EA",
	200: "#92F3DE",
	300: "#58DCCA",
	400: "#2EBAB3",
	500: "#00878C",
	600: "#006978",
	700: "#005064",
	800: "#003951",
	900: "#002A43",
};
const success = {
	100: "#E7F8CB",
	200: "#CAF19A",
	300: "#9CD762",
	400: "#6CB038",
	500: "#357C0C",
	600: "#266A08",
	700: "#1A5906",
	800: "#104703",
	900: "#093B02",
};
const warning = {
	100: "#FAEAC8",
	200: "#F6D294",
	300: "#E3AB5C",
	400: "#C98333",
	500: "#A55001",
	600: "#8D3D00",
	700: "#762D00",
	800: "#5F1F00",
	900: "#4F1500",
};
const danger = {
	100: "#FADED1",
	200: "#F5B8A5",
	300: "#E28474",
	400: "#C5544D",
	500: "#A01E22",
	600: "#891523",
	700: "#730F23",
	800: "#5C0922",
	900: "#4C0520",
};
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		colors: {
			primary,
			secondary,
			success,
			warning,
			danger,
			gray: colors.gray,
			purple: colors.purple,
		},
		fontFamily: {
			dancing: ["Dancing Script", "sans-serif"],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
