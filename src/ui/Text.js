import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledText = motion.custom(styled.span`
color: ${props => props.color ? props.theme.palette[props.color]['main'] : props.theme.textColor};

`)
