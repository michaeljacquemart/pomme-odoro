import React from "react";
import View from "./view";

const format = time => {
    let tempStr = "";
    const ZERO = "0";
    const MIN = Math.floor(time / 60);
    const SEC = time % 60;
    if (SEC < 10) {
        tempStr = `${MIN}:${ZERO}${SEC}`;
    } else {
        tempStr = `${MIN}:${SEC}`;
    }

    return tempStr;
};
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevTime: 1500,
            time: 1500,
            running: false,
            message: "My message",
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
    time() {
        const REF = setInterval(() => {
            if (this.state.time <= 0 || this.state.running === false) {
                clearInterval(REF);
            } else {
                this.setState(prefState => ({
                    time: prefState.time - 1,
                }));
            }
        }, 1000);
    }

    toggleTimer() {
        const RUNNING = this.state.running;
        if (RUNNING === false) {
            this.setState(() => ({
                running: true,
            }));
            this.time();
        } else if (RUNNING === true) {
            this.setState(() => ({
                message: "Focus, for God's sake !",
            }));
        }
    }
    incrementTime() {
        if (this.state.running === false) {
            this.setState(prefState => ({
                time: prefState.time + 60,
                prevTime: prefState.prevTime + 60,
            }));
        }
    }
    decrementTime() {
        if (this.state.running === false) {
            this.setState(prefState => ({
                time: prefState.time - 60,
                prevTime: prefState.prevTime - 60,
            }));
        }
    }

    resetTimer() {
        this.setState(prevState => ({
            running: false,
            time: prevState.prevTime,
        }));
    }

    render() {
        return (
            <div>
                <View
                    displayTime={format(this.state.time)}
                    startTimer={this.toggleTimer}
                    incrementTime={this.incrementTime}
                    decrementTime={this.decrementTime}
                    resetTimer={this.resetTimer}
                />
            </div>
        );
    }
}
