export const showItemsGrid = (jsonData: Record<string, any>[] | undefined) => {
    const grid = jsonData?.length ? jsonData.map((item) => {
        return (
            <div>
                <h2>{item.name}</h2>
                <img src={item.sprites.front_default} />
            </div>
        );
    }) : (<>...</>);
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {grid}
        </div>
    );
}