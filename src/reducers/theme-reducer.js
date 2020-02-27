import {TOGGLE_THEME} from "./consntants";
import light, {dark} from "../themes";

function themeReducer(state, action) {
	switch (action.type) {
		case TOGGLE_THEME:
			if (action.payload.isDarkMode) {
				return {
					...state,
					theme: dark
				}
			} else {
				return {
					...state,
					theme: dark
				}
					;
			}
	}
	return {
		...state,
	};
}

export default themeReducer;
