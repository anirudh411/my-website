import React from "react";
import { motion } from "framer-motion";

export default function TechnologyCard({ render = null, technology = {} }) {
	if (render) return render;
	return (
		<div className="xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 flex flex-col">
			<motion.img
				drag
				className="w-full h-32"
				src={technology?.image?.publicURL}
				alt={technology?.title}
			/>
			<p className="text-center">{technology.title}</p>
		</div>
	);
}
