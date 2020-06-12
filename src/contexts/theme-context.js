import React from "react";
import theme, {dark} from "../themes"
import {ThemeContext} from "styled-components";
import themeReducer from "../reducers/theme-reducer";


const initialState = {
	isDarkMode: localStorage.getItem('inDarkMode'),
	theme: theme,
};
const ThemeDispatchContext = React.createContext();

function ThemeProvider({children}) {
	const [state, dispatch] = React.useReducer(themeReducer, initialState);
	return (
		<ThemeContext.Provider value={state.theme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>);
}

export {ThemeProvider, ThemeDispatchContext}
