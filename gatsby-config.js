module.exports = {
	siteMetadata: {
		title: "Anirudh's  Personal Website",
		description:
			"Hey.. Welcome to my website. I am a javascript developer. Feel free to get in touch",
	},
	plugins: [
		// {
		//   resolve: "gatsby-plugin-google-analytics",
		//   options: {
		//     trackingId: "",
		//   },
		// },
		"gatsby-plugin-postcss",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: require.resolve("./src/components/Layout"),
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		"gatsby-transformer-json",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: "./data/",
			},
			__key: "data",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};
