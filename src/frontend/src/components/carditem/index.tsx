import { Card } from '@heroui/react';
import { type CardItemProps } from './types';
import { Btn } from "../btn";

export const CardItem = ({ data, btnType, btnCallback }:CardItemProps) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title className="text-3xl font-medium">{data.name}</Card.Title>
            </Card.Header>
            <img src={data.sprites?.front_default ?? "/placeholder.png"} alt={data.name} />
            <Card.Footer>
                <Btn type={btnType} callback={() => btnCallback(data.id)} />
            </Card.Footer> 
        </Card>
    )
}