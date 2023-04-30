import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
           <div className="text-center">
           <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>
           <div>
           <Button variant="danger">Latest</Button>
           </div>
        </Container>
    );
};

export default Header;