import { motion } from "framer-motion";
import React from "react";

const Introduction = () => (
	<div className="flex mt-6 flex-col items-center">
		<p>Hi , I am</p>
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
			className="text-3xl my-4 dark:text-green-500 text-green-700 text-center"
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
			className="mt-6 text-2xl text-center"
		>
			Tools and technologies that I have worked with so far
		</motion.p>
	</div>
);
export default Introduction;
