import {NavLink, useLocation} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {ThemeDispatchContext} from "../contexts/theme-context";
import {TOGGLE_THEME} from "../reducers/consntants";
import useLocalStorage from "../hooks/useLocalStorage";
import {device} from "./css/util";
import {motion} from "framer-motion";
import {Button, ButtonInner} from "./button";

const Nav = styled(motion.nav)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	position:sticky;
	font-size: 1rem;
    background: ${props => props.theme.background.default};
    
   &.open {
      
    }
    
    &.close {
    
    
    
      @media ${device.onlyMobile}{
         position: unset;
         height: unset;
         justify-content: flex-start;
         min-width: unset;
         width: unset;

      
        & button {
           position: unset;
         } 
      }
    } 
    
    @media ${device.onlyMobile}{
    
        bottom: 0;
        width: 100vw;
        left: 0;
        min-width: 100vw;
        height: 100vh;
        opacity: 1;
        transform: none;
        position: fixed;
        z-index: 4;
        top: 0;
    }
    
    button {
      position:absolute ;
      right: 0;
      margin:1rem 1rem 1rem 0;
      
    }
 
    
	ul {
	    padding-inline-start: 0;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		
		
		&.close {
		  @media ${device.onlyMobile}{
    		  display: none;
		  
		  }
		  	
		}
		
		@media ${device.mobileS}{
		    flex-direction:column;
		    justify-content: center;;
		    align-items: center;
		}
		
		@media ${device.tablet}{
		flex-direction:row;;
		margin-bottom:2rem;
		}
		
	
		li {
			display: flex;
			border-radius: .4rem;
			list-style: none;
			cursor:pointer;

			@media ${device.mobileS}  {
		 		margin: 0;
			}
			@media ${device.tablet} {
				margin: 1rem 0.2rem;
			}
							
			:hover {
				background: ${props => props.theme.palette.primary.main + '1f'};
			
			}
			
			a {
			    padding: .5rem .7rem;
				text-decoration: none;
				font-weight: 400;
				color:${props => props.theme.textColor}	;
				
			  &.active {
			     @media ${device.mobileS} {
			       color:${props => props.theme.palette.primary.main};
			       border-bottom:2px solid ${props => props.theme.palette.primary.main} ;
		
			     }

				 @media ${device.tablet}{
					border-bottom:2px solid ${props => props.theme.palette.primary.main} ; 
					border-left:none;
				 }
				}
			}
		}		
	}
`;
export default ({links}) => {
    const dispatch = React.useContext(ThemeDispatchContext);
    const [inDarkMode, setDarkMode] = useLocalStorage('inDarkMode', false);
    const [isOpen, setOpen] = React.useState(false);
    const {pathname} = useLocation();
    React.useEffect(() => {
        setOpen(false)
    }, [pathname])
    console.log(pathname);

    const variants = {
        hidden: {opacity: 0, y: -10},
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: .5
            }
        }
    }

    return (
        <Nav initial="hidden" className={isOpen ? 'open' : 'close'} variants={variants} animate='visible'>
            <motion.ul transition={.5} className={isOpen ? 'open' : 'close'}>
                {links.map(link => <motion.li whileHover={{scale: 1.1,}}
                                              animate
                                              whileTap={{scale: 0.97}}
                                              key={link.title}><NavLink
                    to={link.to}>{link.title}</NavLink></motion.li>)}
                <motion.li
                    animate
                    whileTap={{scale: 0.98}
                    }
                    whileHover={{scale: 1.05}}
                    onClick={() => {
                        setDarkMode(inDarkMode => !inDarkMode);
                        dispatch({type: TOGGLE_THEME, payload: {inDarkMode}})
                    }}><a>Toggle Theme</a>
                </motion.li>
            </motion.ul>
            <ButtonInner animate onClick={() => setOpen(open => !open)} className="d-md-none d-flex">
                <span aria-label={"Menu toggle"} className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </ButtonInner>

        </Nav>
    )
}
