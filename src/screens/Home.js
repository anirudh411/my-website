import React from "react";
import NavBar from "../ui/NavBar"
import {Outlet} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import Footer from "../ui/components/Footer";


function Home() {

    let navigate = useNavigate();
    let {pathname} = useLocation();
    React.useEffect(() => {

        if (pathname === "/") {
            navigate('/home')

        }
    }, [pathname, navigate]);
    return (<>
            <header className="container">
                <NavBar links={
                    [
                        {title: 'Home', to: '/home'},
                        {title: 'About Me', to: '/about'},
                        {title: 'Activity', to: '/activity'}
                    ]}/>
            </header>
            <main className="container">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}


export function LandingPage() {
    const ref = React.useRef('home');
    return (
        <div id="home" className="row justify-content-center  align-content-center work-in-progress">
            <h1>Work in Progress</h1>
        </div>
    )
}

export default Home;
