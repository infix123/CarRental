module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			fontFamily: {
				sans: ["Heebo", "sans-serif"],
			},
			colors: {
				darkBlue: "#243264",
				lightBlue: "#8D99C0",
				darkOrange: "#FC6C4C",
			},
		},
	},
	plugins: [],
};
