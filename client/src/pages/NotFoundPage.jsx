import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import routes from '../helpers/routes';
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <Container>
            <Row style={{marginTop: "2rem"}}>
                <Col className='text-center' md={{span: 6, offset: 3}}>
                    <img
                    className='w-100' 
                    src="/img/404-not-found.svg" 
                    alt="error-404" />
                    <h2>¿Te has perdido?</h2>
                    <p>Vuelve al <Link to={routes.home}>inicio</Link> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;