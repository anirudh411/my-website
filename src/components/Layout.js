import React from "react";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { Helmet } from "react-helmet";
import { AnimateSharedLayout, motion } from "framer-motion";
import { LINK_HOVER_ZOOM, LINK_TAP_SHRINK } from "../utils/constants";
import { Link } from "gatsby";

export default ({ pageTitle = "", children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<>
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<title>{pageTitle || title}</title>
				<body className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100" />
			</Helmet>
			<div className="h-screen flex flex-col">
				<nav className=" max-w-7xl w-full  mx-auto flex flex-row md:flex-col">
					<AnimateSharedLayout>
						<ul key={"nav-list"} className="flex justify-end w-full">
							{[
								{ title: "Home", href: "/" },
								{ title: "About", href: "/about" },
								{
									title: "Activity",
									href: "/activity",
								},
							].map((link, i) => (
								<motion.li
									key={link.href}
									animate
									layout
									whileHover={{
										scale: LINK_HOVER_ZOOM,
									}}
									whileTap={{
										scale: LINK_TAP_SHRINK,
									}}
									className="mx-2 font-medium text-lg font-mono relative transition transform cursor-pointer disabled:opacity-50 text-gray-900 dark:text-gray-100	rounded-md	hover:font-bold hover:cursor-pointer hover:bg-purple-200 hover:text-black "
								>
									<Link
										className={"px-8 py-2 inline-block"}
										activeClassName="dark:text-purple-500 text-purple-700 font-bold border-solid border-b-4 border-l-0 border-purple-800 dark:border-purple-500"
										to={link.href}
									>
										{link.title}
									</Link>
								</motion.li>
							))}
						</ul>
					</AnimateSharedLayout>
				</nav>
				<main className="max-w-7xl w-full flex-1 h-auto mx-auto flex flex-row md:flex-col">
					{children}
				</main>
				<footer className="w-full bg-purple-800 justify-self-end h-60">
					{" "}
					Footer
				</footer>
			</div>
		</>
	);
};
