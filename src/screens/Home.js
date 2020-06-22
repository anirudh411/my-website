import React from "react";
import NavBar from "../ui/NavBar"
import {Outlet} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import Footer from "../ui/components/Footer";
import {StyledText} from "../ui/Text";
import {motion} from "framer-motion";
import {homePageIcons} from "../assets/data";
import {tapAnimation, hoverAnimation} from "./resume/utils";
import {DELAY_PER_CHILDREN_IN_SEC, TWITTER_URL} from "../constants";


function Home() {

    let navigate = useNavigate();
    let {pathname} = useLocation();
    React.useEffect(() => {

        if (pathname === "/") {
            navigate('/home')

        }
    }, [pathname, navigate]);
    return (<>
            <motion.header className="container">
                <NavBar links={
                    [
                        {title: 'Home', to: '/home'},
                        {title: 'About Me', to: '/about'},
                        {title: 'Activity', to: '/activity'}
                    ]}/>
            </motion.header>
            <motion.main className="container">
                <Outlet/>
            </motion.main>
            <Footer/>
        </>
    )
}


export function LandingPage() {
    const container = {
        hidden: {opacity: 1,},
        preserve3d: true,
        show: {
            transition: {
                staggerChildren: DELAY_PER_CHILDREN_IN_SEC
            }
        }
    };
    const variants = {
        show: {opacity: 1, y: 0, originX: 0, letterSpacing: '.05rem'},
        hidden: {opacity: 0.00001, y: '-1rem', letterSpacing: 'normal'},

    }
    // const ref = React.useRef('home');
    return (
        <motion.div variants={container}
                    initial="hidden"
                    animate="show"
                    id="home"
                    className="row flex-column">
            <div className="col-sm-12 jus" style={{textAlign: 'center'}}>
                <StyledText as='small' variants={variants} className="mb-0 small" color='primary'>Hi, my name
                    is </StyledText>
                <StyledText variants={variants} as="h2">Anirudh. </StyledText>
                <StyledText variants={variants} as="h1" color="secondary" className="text-muted">I develop things for
                    the Web.</StyledText>
            </div>

            <div className="col-12 mt-5" style={{textAlign: 'center'}}>
                <StyledText variants={variants} as="h3" className="text-muted">
                    Tool and Technologies that I have
                    worked with so far</StyledText>
            </div>
            <motion.div variants={variants} className="col-sm-12 justify-content-center my-4 d-flex flex-wrap ">
                {homePageIcons.map(({src, title, link}, index) => <div key={index}
                                                                       title={title}
                                                                       className="d-flex flex-1 mx-2 my-2 align-items-center   flex-column">
                    <motion.img animate={{opacity: 0.5}}
                                {...tapAnimation}
                                {...hoverAnimation}
                                inital={{opacity: 0}}
                                src={src}
                                style={{
                                    minWidth: '5rem',
                                    maxHeight: '5rem', objectFit: 'contain'
                                }} alt={title}/>
                    <StyledText animate
                                className="caption mt-2"
                                href={link}
                                target="_blank"
                                as={link ? 'a' : 'p'}>{title}</StyledText>
                </div>)}
            </motion.div>
            <motion.div variants={variants} className="col-sm-12 justify-content-center my-4 d-flex flex-wrap">
                Lets create something. You can find me on &nbsp;<a href={TWITTER_URL}> twitter</a> &nbsp; or drop a
                message
                below.
            </motion.div>
        </motion.div>
    )
}

export default Home;
