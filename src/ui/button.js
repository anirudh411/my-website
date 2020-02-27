import styled from "styled-components";

const handleBackground = (props) => {
	if (props.outlined) return `transparent`;
	if (props.secondary)
		return props.theme.button.secondary.fill;
	else return props.theme.button.primary.fill;
};
export const Button = styled.button`
		background-color: ${handleBackground};
		border-color:${props => props.theme.button.primary.stroke};
		border-style: solid;
		border-width:.1rem;
		border-radius: .3rem;
		cursor: pointer;
		color: ${props => props.theme.button.primary.text};
		padding: .6rem 1rem;
		&:hover {
		background-color:${props => props.theme.button.primary.stroke};
		}
		
		
`;
