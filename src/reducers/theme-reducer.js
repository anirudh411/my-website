import {TOGGLE_THEME} from "./consntants";
import light, {dark} from "../themes";

function themeReducer(state, action) {
    if (action.type === TOGGLE_THEME) {
        if (action.payload) {
            return {...state, theme: light, inDarkMode: false}
        } else return {theme: dark, inDarkMode: true}
    }
}

export default themeReducer;
