import React from 'react';


import { Col, Container, Row } from 'react-bootstrap';


import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Footer/Footer';
import RightNav from '../../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
         <Container>
      <Row>

        <Col sm={9} lg={9}><Outlet></Outlet>
        </Col>

        <Col sm={3} lg={3}><RightNav></RightNav>
        </Col>

      </Row>
    </Container> 
        <Footer></Footer>
        </div>
    );
};

export default NewsLayout;