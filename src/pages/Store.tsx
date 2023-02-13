import { Row, Col } from 'react-bootstrap'
import { StoreCategory } from '../components/StoreCategory'
import { Link } from 'react-router-dom';
import storeCategories from '../data/main/categories.json'

export function Store(){
    const linkDestinations = 
    [
        '/grocerystore/dairy', 
        '/grocerystore/meat',
        '/grocerystore/vegetables',
        '/grocerystore/fruits',
        '/grocerystore/snacks',
        '/grocerystore/fastfood'
    ];
    return (
        <>
            <Row xs={1} md={2} lg={3} className = 'g-3'>
            {storeCategories.map((category, key) => (
                <Col key={category.id}>
                    <Link to={linkDestinations[(key) % linkDestinations.length]} style={{ textDecoration: "none", color: "black" }}>
                        <StoreCategory {...category} />
                    </Link>
                </Col>
            ))}

            </Row>
        </>
    )
}