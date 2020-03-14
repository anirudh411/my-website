import React from "react";

function useLocalStorage(key, defaultValue = '') {
	const [state, setState] = React.useState(() => {
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch (e) {
			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		}
	});
	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [state]);
	return [state, setState];
}
export default useLocalStorage;



