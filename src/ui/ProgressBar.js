import styled, {keyframes} from "styled-components";
import React from "react";
import {motion} from "framer-motion";

export const ProgressBar = styled(motion.div)`
  width:100%;
  background:${props => props.theme.progress.background};
  height:.7rem;
  border-radius:20px; 
`;

function handleProps({limit = 4}) {
    let width = `${(limit * 100)}%`;
    return width;
}

const kProgress = (props) => keyframes`
 
 from {
      width: 0;
    } 
    to {
      width: ${handleProps(props)} ;
    }
`;

export const ProgressThumb = styled(ProgressBar)`
   //animation: .4s ease-in 1  forwards ${kProgress} .8s ;
    width:0;
    background: ${props => props.theme.progress.foreground};
`;

export const Progress = ({maxValue, index}) => {
    const variants = {
        show: {
            width: handleProps({limit: maxValue})
        },
        hidden: {
            width: 0
        }
    }
    let progressRef = React.createRef();
    React.useEffect(() => {
        progressRef.current.addEventListener("animationend", () => {
            progressRef.current.style.width = handleProps({limit: maxValue});
        })
    }, []);

    return (
        <ProgressBar animate>
            <ProgressThumb variants={variants}
                           ref={progressRef} className="progress-thumb" limit={maxValue}/>
        </ProgressBar>
    )
};
