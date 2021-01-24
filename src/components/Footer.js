import * as React from "react";
import { Input, TextArea } from "./Input";
import { motion } from "framer-motion";
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
		<label className={"w-full"}>
			<Input
				placeholder={"Your email"}
				name={"email"}
				type={"email"}
				inputMode={"email"}
			/>
		</label>
		<label className={"w-full"}>
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

const FooterBody = ({ children }) => (
	<div className="max-w-7xl mx-auto w-full">{children}</div>
);

const Footer = () => {
	return (
		<footer className="w-full mt-8 p-8 bg-gradient-to-r from-primary-700 to-primary-900 justify-self-end h-64 flex">
			<FooterBody>
				<ContactForm />
			</FooterBody>
		</footer>
	);
};
export default Footer;
