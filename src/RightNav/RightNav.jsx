import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram>Instragram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;