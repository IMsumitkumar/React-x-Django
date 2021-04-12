import React, { useEffect } from 'react'
// import products from '../products'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
// import store from '../store';
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)  // store.productList from store reducer
    const { error, loading, products } = productList


    useEffect(()=>{
        // async function fetchProducts(){
        //     const { data } = await axios.get('/api/products/')
        //     setProducts(data)
        // }

        // fetchProducts()

        
        // eslint-disable-next-line
        dispatch(listProducts())
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>

            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                {products.map(product => 
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                        <Product product={product} />
                    </Col>
                )}
            </Row>
            }
            
        </div>
    )
}

export default HomeScreen
