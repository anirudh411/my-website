import React from "react";
import * as p5 from "p5";

class GameSetup {
    constructor() {
        this.init = null;
        if (!!GameSetup.instance) return GameSetup.instance;
        this.init = new p5();
        GameSetup.instance = this;
        return this;
    }

}
class Ball extends GameSetup {
    constructor(a) {
        super();
        this.a = a;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        p.setup = () => {
        }

        p.draw = () => {
        }
    }

    componentDidMount() {
        let a = new GameSetup()
        console.log(new Ball(10));
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
}
export default Game;
