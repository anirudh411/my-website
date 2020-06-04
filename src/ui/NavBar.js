import {Link, NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {ThemeDispatchContext} from "../contexts/theme-context";
import {TOGGLE_THEME} from "../reducers/consntants";
import useLocalStorage from "../hooks/useLocalStorage";
import {device} from "./css/util";

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
		}
		
		li {
			display: flex;
			border-radius: .4rem;
			list-style: none;
			cursor:pointer;
			margin: 1rem 0.2rem;
							
			:hover {
				background: ${props => props.theme.palette.primary.main + '1f'};
				transition: background 400ms ease-in-out ;
			}
			
			a {
			    padding: .5rem .7rem;
				text-decoration: none;
				font-weight: 400;
				color:${props => props.theme.textColor}	;
				
			  &.active {
			     @media ${device.mobileS} {
			      border-left:2px solid ${props => props.theme.palette.primary.main} ;
			     }
			     
				}
			}
		}		
	}
`;
export default ({links}) => {
    const dispatch = React.useContext(ThemeDispatchContext);
    const [inDarkMode, setDarkMode] = useLocalStorage('inDarkMode', false);

    return <Nav>
        <ul>
            {links.map(link => <li key={link.title}><NavLink to={link.to}>{link.title}</NavLink></li>)}
            <li onClick={() => {
                setDarkMode(inDarkMode => !inDarkMode);
                dispatch({type: TOGGLE_THEME, payload: {inDarkMode}})
            }}><a>Toggle Theme</a>
            </li>
        </ul>
    </Nav>
}
