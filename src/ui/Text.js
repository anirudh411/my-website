import styled from "styled-components";

export const StyledText = styled.span`
color: ${props => props.color ? props.theme.palette[props.color]['main'] : props.theme.textColor};

`
