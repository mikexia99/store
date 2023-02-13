import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

import a from '../data/sub/dairy.json'
import b from '../data/sub/fastfood.json'
import c from '../data/sub/fruits.json'
import d from '../data/sub/meat.json'
import e from '../data/sub/snacks.json'
import f from '../data/sub/vegetables.json'

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps){
    const allItems = [...a, ...b, ...c, ...d, ...e, ...f];

    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas show = {isOpen} onHide = {closeCart} placement = 'end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap = {3}>
                    {cartItems.map (item => (
                        <CartItem key = {item.id} {...item}/> 
                    ))}
                </Stack>
                <div className="d-flex justify-content-end fw-bold fs-5">
                    Total{" "}
                    {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item = allItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}