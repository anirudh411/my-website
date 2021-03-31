import * as React from "react";

const inputClasses =
	"my-3 p-2 text-secondary-500 focus:outline-none focus:ring focus:ring-primary-900 rounded-md w-full";

export const Input = React.forwardRef((props, ref) => (
	<input className={inputClasses} ref={ref} {...props} />
));
export const TextArea = React.forwardRef((props, ref) => (
	<textarea className={inputClasses} ref={ref} {...props} />
));
