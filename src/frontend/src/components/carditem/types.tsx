import { type BtnTypes } from "../btn/types";
export interface CardData {
    id: number;
    name: string;
    sprites: Record<string, string>;
}
export type CardItemProps = { data: CardData; btnType: BtnTypes, btnCallback: (id: number) => void }
