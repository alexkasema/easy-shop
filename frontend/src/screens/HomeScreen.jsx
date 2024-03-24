import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate.jsx';
import Product from '../components/Product';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

import { useGetProductsQuery } from '../slices/productsApiSlice.js';


const HomeScreen = () => {

    //! get the page number from the url
    const { pageNumber } = useParams();
    
    const { data, isLoading, error } = useGetProductsQuery({pageNumber});

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (<>
                <h1>Latest Products</h1>
                <Row>
                    {data.products.map(product => {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        )
                    })}
                </Row>
                <Paginate
                    pages={data.pages}
                    page={data.page} />
            </>)}
            
        </>
    )
}

export default HomeScreen