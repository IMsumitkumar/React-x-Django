import React, { useState, useEffect } from 'react'
// import products from '../products'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'


function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchProducts(){
            const { data } = await axios.get('/api/products/')
            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => 
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                        <Product product={product} />
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default HomeScreen