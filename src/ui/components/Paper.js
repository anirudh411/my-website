import styled from "styled-components";
import {motion} from "framer-motion";


export const Paper = styled(motion.div)`
    box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background: ${props => props.theme.background.paper};
    border-radius: 4px;
    padding: 1rem;
`
