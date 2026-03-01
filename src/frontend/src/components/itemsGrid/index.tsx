import { EmptyState } from "../emptystate";
import { CardItem } from "../carditem";
import  { type CardData } from '../carditem/types';
export const showItemsGrid = (jsonData: CardData[] | undefined) => {
    const content = jsonData?.length ? jsonData.map((item) =>
        <CardItem data={item} key={item.id} />) : <EmptyState />;
    return (
        <>
        <header className="w-full"><h1 className="text-4xl font-bold">Pokemons in the wild</h1></header>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-1/2">
            {content}
        </div>
        </>
    );
}