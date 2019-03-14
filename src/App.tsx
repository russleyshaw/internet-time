import { H1 } from "@blueprintjs/core";
import * as React from "react";

import { useIntervalMemo } from "./hooks";
import { copyToClipboard } from "./utils";

export function App(): JSX.Element {
    const beats = useBeats();
    return (
        <H1 onClick={() => copyToClipboard(beats.toString())} style={{ margin: "auto auto" }}>
            @{beats}
        </H1>
    );

    function useBeats() {
        return useIntervalMemo(() => {
            const b = getInternetTime().toFixed(2);
            document.title = `@${b}`;
            return b;
        }, 100);
    }
}

function getInternetTime(): number {
    const sec = Date.now() / 1000 + 3600;
    return (sec / 86.4) % 1000;
}
