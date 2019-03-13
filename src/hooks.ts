import { useEffect, useRef, useState } from "react";

export function useInterval(callback: () => void, delayMs: number) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(
        () => {
            savedCallback.current = callback;
        },
        [callback]
    );

    // Set up the interval.
    useEffect(
        () => {
            if (delayMs !== null) {
                let id = setInterval(() => savedCallback.current(), delayMs);
                return () => clearInterval(id);
            }
        },
        [delayMs]
    );
}

export function useIntervalMemo<T>(callback: () => T, delayMs: number): T {
    const [value, setValue] = useState(callback);
    useInterval(() => setValue(callback), delayMs);
    return value;
}
