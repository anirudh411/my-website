import React from "react";
import { motion } from "framer-motion";
import HTML5 from "../images/html-5.svg";

const Introduction = () => (
	<div className="flex mt-6 flex-col items-center">
		<caption>Hi , I am</caption>
		<motion.h1
			className="text-5xl dark:text-purple-500 text-purple-700"
			initial={{
				x: 10,
			}}
			animate={{
				x: 0,
			}}
		>
			Anirudh
		</motion.h1>
		<motion.h3
			initial={{
				x: -10,
			}}
			animate={{ x: 0 }}
			className="text-3xl my-4 dark:text-green-500 text-green-700 "
		>
			I develop things for the web.
		</motion.h3>
		<motion.p
			initial={{
				opacity: 0,
				rotateX: -45,
				y: 0,
			}}
			animate={{
				transition: {
					delay: 0.5,
				},
				opacity: 1,
				rotateX: 0,
			}}
			className="mt-6 text-2xl"
		>
			Tools and technologies that I have worked with so far
		</motion.p>
	</div>
);

const ToolsContainer = () => {
	const toolsContainerRef = React.useRef();
	return (
		<motion.div ref={toolsContainerRef} className="flex flex-row">
			<motion.img
				drag
				dragConstraints={toolsContainerRef}
				className="max-h-20"
				src={HTML5}
				alt={"HTML 5"}
			/>
		</motion.div>
	);
};

export default () => {
	return (
		<>
			<Introduction />
			{/*<ToolsContainer />*/}
		</>
	);
};
