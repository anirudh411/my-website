import React from "react";

function useLocalStorage(key, defaultValue = '') {
    const [state, setState] = React.useState(() => !!JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : defaultValue);
    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state,key]);
    return [state, setState];
}

export default useLocalStorage;



