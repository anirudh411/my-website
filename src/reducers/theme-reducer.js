import {TOGGLE_THEME} from "./consntants";
import light, {dark} from "../themes";

function themeReducer(state, action) {
	switch (action.type) {
		case TOGGLE_THEME:
			if (action.payload.inDarkMode) {
				return {
					...state,
					theme: dark
				}
			} else {
				return {
					...state,
					theme: light
				};
			}
	}
	return {
		...state,
	};
}

export default themeReducer;
