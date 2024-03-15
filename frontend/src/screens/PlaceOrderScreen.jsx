import { useState, useEffect } from 'react';
import { Card, Button, Col, Row, Image, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../slices/cartSlice';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {

    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (!cart.shippingAddress.address){
            navigate('/shipping')
        } else if (!cart.paymentMethod){
            navigate('/payment')
        }
    },[cart.paymentMethod, cart.shippingAddress.address, navigate]);

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>Column</Col>
                <Col md={4}>Column</Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen;