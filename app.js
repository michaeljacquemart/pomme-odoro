import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/timer";
import "./components/timer.css";

const App = () => (
    <React.Fragment>
        <div className={"content"}>
            <Timer />
        </div>
    </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector("#root"));
