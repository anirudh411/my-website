import styled, {keyframes} from "styled-components";
import React from "react";

export const ProgressBar = styled.div`
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
   animation: .4s ease-in 1  forwards ${kProgress} .8s ;
    width:0;
    background: ${props => props.theme.progress.foreground};
`;


export const Progress = ({maxValue}) => {
	let progressRef = React.createRef();
	React.useEffect(() => {
		progressRef.current.addEventListener("animationend", () => {
			progressRef.current.style.width = handleProps({limit: maxValue});
		})
	}, []);

	return (
		<ProgressBar>
			<ProgressThumb ref={progressRef} className="progress-thumb" limit={maxValue}/>
		</ProgressBar>
	)
};
