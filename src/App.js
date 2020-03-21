import React from 'react';
import './App.scss';
import data from "./assets/data";
import GlobalStyleProvider from "./contexts/GlobalStyle-context";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./ui/NavBar";
import GameWrapperComponent from "./screens/MindTheVirus";
//import Game from './screens/game/sketch';

const ResumeContextProvider = React.lazy(() => import("./screens/resume/ResumePages"));
const Game = React.lazy(() => import("./screens/game/sketch"));
const Home = React.lazy(() => import("./screens/Home"));

function App() {
	return (
		<GlobalStyleProvider>
			<Router>
				<div className="container">
					<NavBar links={
						[{title: 'Home', to: '/'}, {title: 'About Me', to: '/about'}, {
							title: 'Play Game',
							to: '/game'
						}]}/>
					<React.Suspense fallback={null}>
						<Switch>
							<Route exact path="/about">
								<ResumeContextProvider data={data}/>
							</Route>
							<Route exact path="/game">
								<GameWrapperComponent/>
							</Route>
							<Route exact path="">
								<Home/>
							</Route>
						</Switch>
					</React.Suspense>
				</div>
			</Router>
		</GlobalStyleProvider>
	)
}

export default App
