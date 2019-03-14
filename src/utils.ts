import { Intent, Toaster } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export function copyToClipboard(text: string) {
    const temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    temp.remove();
    toaster.show({
        message: `Copied ${text} to clipboard!`,
        icon: IconNames.DUPLICATE,
        intent: Intent.SUCCESS,
        timeout: 2000
    });
}

export const toaster = Toaster.create();
