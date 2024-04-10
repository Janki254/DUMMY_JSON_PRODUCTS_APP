import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({title, ImgPath, description, price}) => {
    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={ImgPath} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        description : {description}
                        <br />
                        price: {price}
                    </Card.Text>
                    <Button variant='primary'>Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;
