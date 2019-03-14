import DevTools from "mobx-react-devtools";
import * as React from "react";
import { render } from "react-dom";

import { App } from "./App";

import "./style";

render(
    <>
        {process.env.NODE_ENV === "production" ? null : <DevTools />}
        <App />
    </>,
    document.getElementById("main-app")
);
