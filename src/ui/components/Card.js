import styled from "styled-components";
import {Paper} from "./Paper";

export const ActivityCardContainer = styled(Paper)`
     img, iframe{
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

