import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar () {
    const {openCart, cartQuantity} = useShoppingCart()

    return (
        <NavbarBs sticky = 'top' className = 'bg-white shadow-sm mb-3'>
            <Container>
                <Nav className = 'me-auto'>
                    <Nav.Link to = '/store/' as = {NavLink}>
                        Store
                    </Nav.Link>
                </Nav>

                <Button
                    onClick = {openCart}
                    style = {{width: '3.5rem', height: '3.5rem', position: 'relative'}}
                    variant = 'outline-primary'
                    className = 'rounded-circle d-flex justify-content-center align-items-center'>

                        <img style = {{width: '2.75rem', height: '2.75rem', objectFit: 'cover'}} src="/icon/cart.png" alt="Cart Icon" />

                        <div
                            className = 'rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style = {{
                                color: 'white', 
                                width: '2rem', 
                                height: '2rem', 
                                position: 'absolute', 
                                bottom: 0, 
                                right: 0,
                                transform: 'translate(25%, 25%)'
                            }}>

                            {cartQuantity}       
                        </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}