import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../store/productsSlice/productsIndex';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const {
        data: products,
        error,
        loading,
        currentPage,
    } = useSelector((state) => state.products);

    useEffect(() => {
        if (loading === false) {
            dispatch(fetchProducts());
        }
    }, [loading, currentPage, dispatch]);

    if (loading === 'true') {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>Error : {error}</h2>;
    }
    return (
        <>
            <Container>
                <Row className='mt-3 mb-3'>
                    <h2>Product List</h2>
                </Row>
                <Row className='justify-content-center'>
                    {products.length > 0 &&
                        products.map((product) => (
                            <Col key={product.id} className='mb-4'>
                                <ProductCard
                                    title={product.title}
                                    ImgPath={product.thumbnail}
                                    description={product.description}
                                    price={product.price}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default ProductsPage;
