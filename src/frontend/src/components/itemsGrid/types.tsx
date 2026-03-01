import { type CardData } from "../carditem/types";
import { type BtnTypes } from "../btn/types";
export interface ItemsGridType {
    jsonData: CardData[] | undefined;
    title: string;
    btnType: BtnTypes;
    btnCallback: (id: number)=>void;
}