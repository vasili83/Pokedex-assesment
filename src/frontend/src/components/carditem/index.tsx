import { Card, Skeleton } from '@heroui/react';
import { type CardItemProps } from './types';
import { Btn } from "../btn";

export const CardItem = ({ data, btnType, btnCallback }:CardItemProps) => {
    const img = data.sprites?.front_default ? (<img src={data.sprites?.front_default} alt={data.name} />) : (<Skeleton className="h-32 rounded-lg" />);
    return (
        <Card>
            <Card.Header>
                <Card.Title className="text-3xl font-medium">{data.name}</Card.Title>
            </Card.Header>
            {img}
            <Card.Footer>
                <Btn type={btnType} callback={() => btnCallback(data.id)} />
            </Card.Footer> 
        </Card>
    )
}