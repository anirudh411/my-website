import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const handleBackground = (props) => {
	if (props.outlined) return `transparent`;
	if (props.secondary)
		return props.theme.button.secondary.fill;
	if (props.success) {
		return props.theme.button.success.fill;
	}

	else return props.theme.button.primary.fill;
};




export const ButtonInner = styled(motion.button)`
		min-width:fit-content;
		width: ${props => props.width || 'inherit'};
		background-color: ${handleBackground};
		border-color:${props => props.theme.palette.primary.main};
		border-style: solid;
		border-width:.15rem;
		border-radius: .3rem;
		cursor: pointer;
		color: ${props => props.theme.button.primary.text};
		padding: .1rem .5rem;
		&:hover {
		background-color:${props => props.theme.palette.primary.light + '22'};
		}	
		&:focus {
		outline: none;
		}
`;

export const Button = React.forwardRef(({ children, ...rest }, ref) =>
	<ButtonInner {...rest} whileTap={{ scale: 0.98 }} ref={ref}>
		{children}
	</ButtonInner>)

