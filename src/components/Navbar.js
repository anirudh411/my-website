import { AnimateSharedLayout, motion } from "framer-motion";
import { LINK_HOVER_ZOOM, LINK_TAP_SHRINK } from "../utils/constants";
import { Link } from "gatsby";
import React from "react";

const navLinks = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{
		title: "Activity",
		href: "/activity",
	},
];

const NavBar = () => (
	<nav className=" max-w-7xl w-full  mx-auto flex flex-row md:flex-col">
		<AnimateSharedLayout>
			<ul className="flex flex-col md:flex-row justify-end w-full lg:pt-4">
				{navLinks.map((link, i) => (
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
						className="mx-0 lg:mx-2 font-medium text-lg font-mono relative transition transform cursor-pointer disabled:opacity-50 text-gray-900 dark:text-gray-100	rounded-md lg:hover:font-bold hover:cursor-pointer "
					>
						<Link
							className={"px-8 py-2 inline-block"}
							activeClassName="dark:text-primary-100  dark:lg:hover:text-primary-900 text-primary-700 font-bold border-solid  border-l-4 lg:border-l-0 lg:border-b-4 border-l-0 border-primary-800 dark:border-primary-100"
							to={link.href}
						>
							{link.title}
						</Link>
					</motion.li>
				))}
			</ul>
		</AnimateSharedLayout>
	</nav>
);

export default NavBar;
