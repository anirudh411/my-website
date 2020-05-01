import React from "react";
import * as P5 from "p5";
import * as Matter from "matter-js";
import NavBar from "../ui/NavBar";
import {Outlet} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import {P5Component} from "../ui/P5Wrapper";
import {AngryBirdGame} from "./angryBirdSimulation";

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
    React.useLayoutEffect(() => {
        if (pathname === "/") {
            navigate('home');
        }
    }, [pathname, navigate]);
    return (<>
            <NavBar links={
                [
                    {title: 'Home', to: '/'},
                    {title: 'About Me', to: '/about'},
                    {title: 'Activity', to: '/activity'}
                ]}/>
            <Outlet/>
        </>
    )
}


export function LandingPage() {
    const ref = React.useRef('home');
    return (
        <div id="home" className="row justify-content-center  align-content-center work-in-progress">
            <P5Component ref={ref} parentId Sketch={AngryBirdGame}/>
            <h1>Work in Progress</h1>
        </div>
    )
}

export default Home;
