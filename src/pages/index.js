import React from "react";
import TechnologyContainer from "../components/TechnologyContainer";
import Introduction from "../components/Introduction";

const Home = () => {
	return (
		<div className="flex px-4 flex-col">
			<Introduction />
			<TechnologyContainer />
		</div>
	);
};

export default Home;
