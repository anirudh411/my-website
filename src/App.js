import React from 'react';
import './App.scss';
import data from "./assets/data";
import GlobalStyleProvider from "./contexts/GlobalStyle-context";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./ui/NavBar";
//import Game from './pages/game/sketch';

const ResumeContextProvider = React.lazy(() => import("./pages/resume/ResumeContainer"));
const Game = React.lazy(() => import("./pages/game/sketch"));

function App() {
	return (
		<GlobalStyleProvider>
			<Router>
				<div className="container">
					<NavBar links={
						[{title: 'Home', to: '/'}, {title: 'About Me', to: '/about'},{title:'Play Game',to:'/game'}]}/>
					<React.Suspense fallback={null}>
						<Switch>
							<Route exact path="/about">
								<ResumeContextProvider data={data}/>
							</Route>
							<Route exact path="/game">
								<Game/>
							</Route>
							<Route exact path="">
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
