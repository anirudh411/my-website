import styled from "styled-components";

const BaseInput = styled.input`
  padding: 0.5em;
  margin:0.5em 0;
  width: 100%;
  color: ${props => props.theme.palette.primary.main};
  border:1px solid ${props => props.theme.palette.primary.main} ;
  background:${props => props.theme.background.default} ;
  border-radius: 3px;
  ::placeholder {
  color:${props => props.theme.palette.primary.main} ;
  }
  :focus {
    outline: none;
    border:3px solid ${props => props.theme.palette.primary.main} ;
  }
`
const Input = styled(BaseInput)`
  border-radius:.5rem ;
`


export default Input
