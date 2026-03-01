export interface CardData {
    id: number;
    name: string;
    sprites: Record<string, string>;
}
export type CardItemProps = { data: CardData; }