import React from 'react';
import './App.scss';
import data from "./assets/data";
import GlobalStyleProvider from "./contexts/GlobalStyle-context";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./ui/NavBar";

const ResumeContextProvider = React.lazy(() => import("./pages/resume/ResumeContainer"));

function App() {
	return (
		<GlobalStyleProvider>
			<Router>
				<div className="container">
					<NavBar links={[{title: 'Home', to: '/'}, {title: 'About Me', to: '/about'}]}/>
					<React.Suspense fallback={null}>
						<Switch>
							<Route exact path="/about">
								<ResumeContextProvider data={data}/>
							</Route><Route exact path="">
							<div className="row justify-content-center  align-content-center work-in-progress">
								<h1>Work in Progress</h1>
							</div>
						</Route>
						</Switch>
					</React.Suspense>
				</div>
			</Router>
		</GlobalStyleProvider>
	)
}

export default App
