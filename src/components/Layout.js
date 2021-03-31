import React from "react";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default React.memo(({ pageTitle = "", children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<>
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<title>{pageTitle || title}</title>
				<body className="dark:bg-gray-900 dark:text-gray-100 bg-gray-100" />
			</Helmet>
			<div className="h-screen flex flex-col">
				<NavBar />
				<main className="max-w-7xl w-full flex-1 h-auto mx-auto flex flex-row md:flex-col">
					{children}
				</main>
				{/*<Footer key="footer" />*/}
			</div>
		</>
	);
});
