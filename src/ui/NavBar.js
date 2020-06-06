import {Link, NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {ThemeDispatchContext} from "../contexts/theme-context";
import {TOGGLE_THEME} from "../reducers/consntants";
import useLocalStorage from "../hooks/useLocalStorage";
import {device} from "./css/util";
import {motion} from "framer-motion";

const Nav = styled.nav`
	width: 100%;
	display: flex;
	position:sticky;
	font-size: 1rem;
	ul {
	    padding-inline-start: 0;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		
		@media ${device.mobileS}{
		    flex-direction:column;
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
			       border-left:2px solid ${props => props.theme.palette.primary.main} ;
				   border-bottom:none;
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
    const variants = {
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, x: 0, y: 0}
    }

    return <motion.div initial="hidden" variants={variants} animate='visible'>
        <Nav>
            <ul>
                {links.map(link => <motion.li whileHover={{scale: 1.1,}}
                                              whileTap={{scale: 0.97}}
                                              key={link.title}><NavLink
                    to={link.to}>{link.title}</NavLink></motion.li>)}
                <motion.li
                    whileTap={{scale: 0.97}}
                    whileHover={{scale: 1.1}}
                    onClick={() => {
                        setDarkMode(inDarkMode => !inDarkMode);
                        dispatch({type: TOGGLE_THEME, payload: {inDarkMode}})
                    }}><a>Toggle Theme</a>
                </motion.li>
            </ul>
        </Nav>
    </motion.div>
}
