import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

interface info {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

export function Products(){
    let  {type}  = useParams();
    
    const [myData, setMyData] = useState<info[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await import(`../data/sub/${type}.json`);
          setMyData(result.default);
        };
        fetchData();
    }, [type]);

    return (
        <>
            <Row xs={1} md={2} lg={3} className = 'g-3'>
                {myData.map(item => (
  
                    <Col key = {item.id}>
                        <Product {...item}/>
                    </Col>    
                ))}
            </Row>
        </>
    )
}