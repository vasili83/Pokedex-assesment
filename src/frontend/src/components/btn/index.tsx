import { Button } from "@heroui/react";
import { type BtnIntrfc } from "./types";

export const Btn = ({ type, callback }: BtnIntrfc) => {
    const btnProps: Record<string, any> = {
        "catchPokemon": {
            label: "catch pokemon",
            variant: "secondary",
        },
        "deletePokemon": {
            label: "remove from dex",
            variant: "danger-soft",
        }
    }
    return (
        <Button onPress={callback} variant={btnProps[type].variant}>{btnProps[type].label}</Button>
    );
}