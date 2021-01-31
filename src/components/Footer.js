import * as React from "react";
import ContactForm from "./ContactForm";

const FooterBody = ({ children }) => (
	<div className="max-w-7xl mx-auto w-full">{children}</div>
);

const Footer = () => {
	return (
		<footer className="w-full mt-8 p-8 bg-gradient-to-r from-primary-700 to-primary-900 justify-self-end h-64 flex">
			<FooterBody children={<ContactForm key={"contact-form"} />} />
		</footer>
	);
};
export default Footer;
