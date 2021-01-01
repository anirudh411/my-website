import useTechnologies from "../hooks/use-technologies";
import React from "react";
import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

const TechnologyContainer = () => {
	const data = useTechnologies();
	const toolsContainerRef = React.useRef();
	return (
		<motion.div
			ref={toolsContainerRef}
			className="flex items-center pt-8 flex-wrap flex-row"
		>
			{data.map((technology, index) => (
				<TechnologyCard key={index} technology={technology} />
			))}
		</motion.div>
	);
};
export default TechnologyContainer;
