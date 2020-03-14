import {Link, NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {ThemeDispatchContext} from "../contexts/theme-context";
import {TOGGLE_THEME} from "../reducers/consntants";
import useLocalStorage from "../hooks/useLocalStorage";

const Nav = styled.nav`
	width: 100%;
	display: flex;
	position:sticky;
	font-size: 1rem;
	ul {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		
		li {
			display: flex;
			margin: 1rem 0;
			border-radius: .4rem;
			list-style: none;
			padding: .5rem .5rem;
			cursor:pointer;
					
			:hover {
				background: ${props => props.theme.button.secondary.fill + '1f'};
				transition: background 400ms ease-in-out ;
			}
		
			a {
			 	${props => props.theme.button.primary.text};
				text-decoration: none;
				color:${props => props.theme.textColor}
			}
		}		
	}
`;

const Active = styled.div`
	transition:left 1s;
	width:100px;
	height:1px;
	background:red;


`
export default ({links}) => {
	const dispatch = React.useContext(ThemeDispatchContext);
	const [inDarkMode, setDarkMode] = useLocalStorage('inDarkMode', false);

	return <Nav className="container">
		<ul>
			{links.map(link => <li key={link.title}><NavLink to={link.to}>{link.title}</NavLink></li>)}
			<li onClick={() => {
				setDarkMode(inDarkMode => !inDarkMode);
				dispatch({type: TOGGLE_THEME, payload: {inDarkMode}})
			}}>Toggle Theme</li>
		</ul>
	</Nav>
}
