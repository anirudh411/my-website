import { motion } from "framer-motion";
import * as React from "react";
import { TextArea, Input } from "./Input";
import { LINK_TAP_SHRINK } from "../utils/constants";

const ContactForm = () => (
	<motion.form
		animate={{
			transition: {
				duration: 1,
				delay: 1,
			},
			scale: [0.8, 1],
			y: ["0%", "-50%"],
		}}
		className="bg-gradient-to-b from-primary-500 to-primary-400 shadow-md flex flex-col ml-auto items-center rounded-md p-5 px-8 relative w-full md:w-1/3 "
	>
		<h3 className="text-2xl text-gray-100">Get in touch</h3>
		<label htmlFor="email" className={"w-full"}>
			<Input
				placeholder={"Your email"}
				name={"email"}
				type={"email"}
				inputMode={"email"}
			/>
		</label>
		<label htmlFor="message" className={"w-full"}>
			<TextArea
				placeholder={"Your message"}
				name={"message"}
				type={"textarea"}
			/>
		</label>
		<motion.button
			animate
			whileTap={{
				scale: LINK_TAP_SHRINK,
			}}
			className="w-full my-2 p-2 bg-secondary-900 text-gray-100 focus:outline-none focus:ring focus:ring-secondary-500 rounded-md hover:shadow-md"
			type={"button"}
		>
			Send
		</motion.button>
	</motion.form>
);

export default ContactForm;
