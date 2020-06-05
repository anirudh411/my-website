import styled from "styled-components";

const Footer = styled.footer`
  padding: 2rem 4rem;
  margin-top:3rem;
  min-height: 25vh;
  background-image:  linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  linear-gradient(90deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.primary.light});
 
`
export default Footer;
