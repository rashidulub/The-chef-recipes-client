import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import FoodZone from '../FoodZone/FoodZone';

const RightNav = () => {
    return (
        <div className='text-center'>

            <h4 className='mb-3 text-center mt-3 ' >Login With </h4>
            <Button className='mb-2 ' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub className='mr-3' />Login with Github  </Button>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    < ListGroup.Item><FaFacebook />  facebook  </ListGroup.Item>
                    <ListGroup.Item><FaInstagram />  Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaDiscord />  Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <FoodZone></FoodZone>
        </div>
    );
};

export default RightNav;
<h1>right nav</h1>