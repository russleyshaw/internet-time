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
            const b = getBeatsNow().toFixed(2);
            document.title = `@${b}`;
            return b;
        }, BEATS_TO_SECONDS);
    }
}

const BEATS_TO_SECONDS = 1 / 86.4;
const MILLISECONDS_TO_SECONDS = 1 / 1000;
const MINUTES_TO_SECONDS = 60;
const HOURS_TO_SECONDS = MINUTES_TO_SECONDS * 60;

function getBeatsNow(): number {
    const d = new Date();
    const totalSeconds =
        d.getUTCMilliseconds() * MILLISECONDS_TO_SECONDS +
        d.getUTCSeconds() +
        d.getUTCMinutes() * MINUTES_TO_SECONDS +
        d.getUTCHours() * HOURS_TO_SECONDS +
        HOURS_TO_SECONDS;
    return totalSeconds * BEATS_TO_SECONDS;
}
