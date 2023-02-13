import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type ProductProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function Product({id, name, price, imgUrl}: ProductProps) {
    const {getItemQuantity,
           increaseCartQuantity,
           decreaseCartQuantity,
           removeFromCart
    }=useShoppingCart()

    const quantity = getItemQuantity(id)

    return (
        <Card className = 'h-100'>
            <Card.Img
                variant = 'top'
                src = {imgUrl}
                height = '275px'
                style = {{objectFit: 'cover'}}
            />
            <Card.Body className = 'd-flex flex-column'>
                <Card.Title className = 'd-flex justify-content-between align-items-baseline mb-4'>
                    <span className = 'fs-2'>{name}</span>
                    <span className = 'ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>

                <div className = 'mt-auto'>
                    {quantity === 0 ? (
                        <Button className = 'w-100' style = {{height: '2.5rem'}} onClick = {() => increaseCartQuantity(id)}>
                            + Add to Cart
                        </Button>) :(
                        <div className = 'd-flex flex-column' style = {{position: 'relative'}}>
                            <div className = 'd-flex justify-content-center' style = {{columnGap: '0.5rem'}}>
                                <Button onClick = {() => decreaseCartQuantity(id)} style = {{width: '2.5rem', height: '2.5rem'}}>
                                    -
                                </Button>
                                <span style = {{height: '2.5rem'}} className = 'fs-3'>{quantity}</span>
                                <Button onClick = {() => increaseCartQuantity(id)} style = {{width: '2.5rem', height: '2.5rem'}}>
                                    +
                                </Button>

                                <div style = {{position: 'absolute', right: 0}}>
                                    <Button onClick = {() => removeFromCart(id)} variant = 'danger' style = {{width: '7rem', height: '2.5rem'}}>
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </Card.Body>
        </Card>

    )
}