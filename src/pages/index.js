import React from "react";
import TechnologyContainer from "../components/TechnologyContainer";
import Introduction from "../components/Introduction";

export default () => {
	return (
		<div className="flex px-4 flex-col">
			<Introduction />
			<TechnologyContainer />
		</div>
	);
};
