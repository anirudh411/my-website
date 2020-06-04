import React from "react";
import * as P5 from "p5";
import * as Matter from "matter-js";
import NavBar from "../ui/NavBar";
import {Outlet} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import Footer from "../ui/Footer";
import Input from "../ui/elements/form";
import {Button} from "../ui/button";

const {Engine, World, Bodies} = Matter;

class HomePageCanvas {
    constructor(p5) {
        this.p5 = p5;
    }

    setup({current}) {
        if (current) {
            let canvas = this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
            this.engine = Engine.create();
            this.world = this.engine.world;
            this.ground = Bodies.rectangle(this.p5.width / 2, this.p5.height, this.p5.width, 10, {isStatic: true})
            this.drop = Bodies.rectangle(0, 0, 200, 200);
            World.add(this.world, [this.drop, this.ground]);
            Engine.run(this.engine);
            canvas.parent(current);
            canvas.position(0, 0, 'fixed');
            canvas.elt.style.zIndex = -999;

        }

    }

    draw() {
        // this.p5.background(255);
        // this.p5.rect(this.drop.position.x, this.drop.position.y, 20, 20);
        // this.p5.rect(this.ground.position.x, this.ground.position.y, this.p5.width, 40);

    }
}

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
            <Footer>
                <div className="row">
                    <div className="offset-md-8">
                    </div>
                    <div className="col-sm-4">
                        <form className="row">
                            <div className="col-sm-12">
                                <legend>Drop an email?</legend>

                            </div>
                            <div className="col-sm-12">
                                <Input type="email" className="form-control"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="col-sm-12">
                                <Input as={'textarea'}>
                                </Input>
                            </div>
                            <div className="col-sm-12 m-2">
                                <Button>
                                    Go
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Footer>
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
