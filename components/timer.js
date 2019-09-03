import React, {useState, useEffect} from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className={"app"}>
            <div className={"time"}>{seconds}</div>
            <div className={"row"}>
                <button
                    type={"button"}
                    className={`button button-primary button-primary-${
                        isActive ? "active" : "inactive"
                    }`}
                    onClick={toggle}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button type={"button"} className={"button"} onClick={reset}>
                    {/* Reset */}
                </button>
            </div>
        </div>
    );
};

export default Timer;
