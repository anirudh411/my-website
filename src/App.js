import React from 'react';
import './App.scss';
import GlobalStyleProvider from "./contexts/GlobalStyle-context";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "./screens/Home";
import data from "./assets/data";

const ResumeContextProvider = React.lazy(() => import("./screens/resume/ResumePages"));
const Home = React.lazy(() => import("./screens/Home"));

function App() {
    return (
        <GlobalStyleProvider>
            <Router>
                <div className="container">
                    <React.Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<Home/>}>
                                <Route path="*" element={<LandingPage/>}/>
                                <Route path="/about" element={<ResumeContextProvider data={data}/>}/>
                                <Route path="/home" element={<LandingPage/>}/>
                            </Route>

                        </Routes>

                    </React.Suspense>
                </div>
            </Router>
        </GlobalStyleProvider>)
}

export default App
