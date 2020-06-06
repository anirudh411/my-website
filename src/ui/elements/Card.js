import styled from "styled-components";
import {motion} from "framer-motion";

export const ActivityCardContainer = styled(motion.div)`
    max-width: 100%;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background: ${props => props.theme.background.paper};
    border-radius: 4px;
    padding: 1rem;
    position: relative;
    
     img ,iframe{
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    
    .content {
    
      .description {
         color: ${props => props.theme.text.secondary};
      }
    }
    
`

