import * as React from "react";
import { render } from "react-dom";

import { useIntervalMemo } from "./hooks";

import "./styles.css";

function App() {
    return (
        <div>
            <SwatchTime />
        </div>
    );
}

const SwatchTime = React.memo(() => {
    const beats = useIntervalMemo(() => getInternetTime(), 100);
    return (
        <div className="App">
            <div>@{beats.toFixed(2)}</div>
        </div>
    );
});

function getInternetTime(): number {
    const sec = Date.now() / 1000 + 3600;
    return (sec / 86.4) % 1000;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
