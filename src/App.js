import React from 'react';
import './App.scss';
import GlobalStyleProvider from "./contexts/GlobalStyle-context";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home, {LandingPage} from "./screens/Home";
import data from "./assets/data";
import Activity from "./screens/activity";

const ResumeContextProvider = React.lazy(() => import("./screens/resume/ResumePages"));

function App() {
    return (
        <GlobalStyleProvider>
            <Router>
                    <React.Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<Home/>}>
                                <Route path="home" element={<LandingPage/>}/>
                                <Route path="*" element={<LandingPage/>}/>
                                <Route path="activity" element={<Activity/>}/>
                                <Route path="about" element={<ResumeContextProvider data={data}/>}/>
                            </Route>
                        </Routes>
                    </React.Suspense>
            </Router>
        </GlobalStyleProvider>)
}

export default App
