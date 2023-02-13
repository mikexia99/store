import { Card } from 'react-bootstrap'

type StoreCategoryProps = {
    id: number
    name: string
    imgUrl: string
}

export function StoreCategory ({id, name, imgUrl}: StoreCategoryProps) {
    
    return (
        <Card>
            <Card.Img 
                variant = 'top' 
                src = {imgUrl} 
                height = '200px' 
                style = {{objectFit: 'cover'}}
            />
            <Card.Body>
                <Card.Title className = 'd-flex justify-content-center'>
                    <span className = 'fs-2'>{name}</span>
                </Card.Title>
            </Card.Body>
    </Card>
    )
}