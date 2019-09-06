import React from "react";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <div id={"content"}>
                    <div id={"Title"}>{"Get your lazy ass to work !"}</div>
                </div>
                <div>
                    <div id={"time"}>{this.props.displayTime}</div>
                    <div id={"buttons"}>
                        <button
                            type={"button"}
                            onClick={() => this.props.startTimer()}>
                            {"Start"}
                        </button>
                        <button
                            id={"plus"}
                            type={"button"}
                            onClick={() => this.props.incrementTime()}>
                            {"+"}
                        </button>
                        <button
                            id={"minus"}
                            type={"button"}
                            onClick={() => this.props.decrementTime()}>
                            {"-"}
                        </button>
                        <button
                            type={"button"}
                            onClick={() => this.props.resetTimer()}>
                            {"Reset"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
