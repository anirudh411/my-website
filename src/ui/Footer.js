import styled from "styled-components";

const Footer = styled.footer`
  padding: 2rem 4rem;
  min-height: 25vh;
  background: linear-gradient(90deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.primary.light});
 
`
export default Footer;
