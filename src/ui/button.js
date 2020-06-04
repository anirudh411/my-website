import styled from "styled-components";

const handleBackground = (props) => {
    if (props.outlined) return `transparent`;
    if (props.secondary)
        return props.theme.button.secondary.fill;
    else return props.theme.button.primary.fill;
};
export const Button = styled.button`
		min-width:fit-content;
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
		
		
`;
