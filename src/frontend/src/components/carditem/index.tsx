import { Card, Button } from '@heroui/react';
import { type CardItemProps } from './types';

export const CardItem = ({ data }:CardItemProps) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title className="text-3xl font-medium">{data.name}</Card.Title>
            </Card.Header>
            <img src={data.sprites?.front_default ?? "/placeholder.png"} alt={data.name} />
            <Card.Footer>
                <Button>catch</Button>    
            </Card.Footer> 
        </Card>
    )
}