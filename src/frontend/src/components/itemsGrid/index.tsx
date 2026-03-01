import { EmptyState } from "../emptystate";
import { CardItem } from "../carditem";
import { type ItemsGridType } from "./types";

export const ShowItemsGrid = ({jsonData, title, btnType, btnCallback}:ItemsGridType) => {
    const content = jsonData?.length ? jsonData.map((item) =>
        <CardItem data={item} key={item.id} btnType={btnType} btnCallback={btnCallback} />) : <EmptyState />;
    return (
        <div className="w-1/2">
            <header className="w-full"><h1 className="text-4xl font-bold">{title}</h1></header>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content}
            </div>
        </div>
    );
}