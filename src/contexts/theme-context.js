import React from "react";
import theme, {dark} from "../themes"
import {ThemeContext} from "styled-components";
import themeReducer from "../reducers/theme-reducer";

const darkMode = JSON.parse(localStorage.getItem('inDarkMode'));


const initialState = {
    inDarkMode: darkMode === true ? darkMode : false,
};

const ThemeDispatchContext = React.createContext();

function ThemeProvider({children}) {
    const [state, dispatch] = React.useReducer(themeReducer, {
        ...initialState,
        theme: initialState.inDarkMode ? dark : theme
    });

    return (
        <ThemeContext.Provider value={state.theme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>);
}

export {ThemeProvider, ThemeDispatchContext}
