import React from "react";
import { motion } from "framer-motion";
import { LINK_HOVER_ZOOM } from "../utils/constants";

export default function TechnologyCard({
	render = null,
	technology = {
		title: "",
		href: "",
		image: {
			publicURL: "",
		},
	},
}) {
	if (render) return render(technology);
	return (
		<div className="xl:w-1/6 lg:w-1/5 md:w-1/4 w-1/3 my-5 flex flex-col cursor-pointer">
			<motion.img
				whileHover={{
					scale: LINK_HOVER_ZOOM,
				}}
				className="min-w-16 max-h-16 opacity-100 2xl:opacity-50 object-contain"
				src={technology?.image?.publicURL}
				alt={technology?.title}
			/>
			<a
				href={technology.href}
				data-text={technology.title}
				className="text-center mt-5"
			>
				{technology.title}
			</a>
		</div>
	);
}
