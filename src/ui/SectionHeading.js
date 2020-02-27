import styled from "styled-components";

export const SectionHeading = styled.div`
     font-weight: bold;
     line-height: 1;
   	 padding: .2rem;
     font-size: 1.5rem;
     border-bottom: 1px solid grey;

`;


export const Section = styled.section`

  i {
    font-weight: bold;
    line-height: 1;
    padding: .2rem;
    font-size: 1.5rem;
  }

  ul {
    padding-left: 0;

    li {
      list-style: none;
    }
  }
  
  .section--heading {
  	
  	cursor:${props => props.expandable ? 'pointer' : ''};

  }

 /* .section--body {
    width: 100%;
    max-height:${props => !props.isExpanded ? '32rem' : 'unset'};
    overflow: ${props => !props.isExpanded ? 'auto' : 'hidden'};;
    transition: max-height 10s ease-in 2s;
    overflow-x: hidden;

    td:nth-child(1) {
      vertical-align: top;
      text-align: center;
    }
  }*/
`;

export const SectionBody = styled.div`
   
    width: 100%;
    max-height:${props => !props.isExpanded ? '30rem' : '100rem'};
    overflow: ${props => !props.isExpanded ? 'overlay' : 'hidden'};
    overflow-x: hidden;
    transition:  max-height .6s,overflow 1s linear 2s;
    
    td:nth-child(1) {
      vertical-align: top;
      text-align: left;
    } 
    td{
    padding: 0 .2rem;
    }

`;
