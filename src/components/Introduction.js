import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const Introduction = () => (
	<div className="flex mt-6 flex-col items-center">
		<p className="font-dancing font-2xl">Hi , I am</p>
		<motion.h1
			className="text-5xl font-dancing dark:text-purple-500 text-purple-700"
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
			className="text-4xl my-4 font-dancing font-bold dark:text-secondary-500 text-secondary-700 text-center"
		>
			I develop things for the
			<Typewriter
				className={"inline"}
				options={{
					skipAddStyles: true,
					wrapperClassName: "inline",
					strings: ["web.", "mobile."],
					autoStart: true,
					loop: true,
				}}
				onInit={() => null}
			/>{" "}
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
			className="mt-6 font-dancing tracking-wide text-3xl text-center"
		>
			Tools and technologies that I have worked with so far
		</motion.p>
	</div>
);
export default Introduction;
