import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
          <h4>Login With</h4>
          <Button className='mb-2' variant="outline-primary"> <FaGoogle /> <span>Login With Google</span></Button>
          <Button variant="outline-secondary"><FaGithub/> Login With Git-Hub</Button>

          <div>
            <h3 className='mt-5'>Find us On</h3>

            <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
      
    </ListGroup>
          </div>
          <div>
          <Qzone/>
          </div>
          <div>
            <img src={bg} alt="" />
          </div>
        </div>
    );
};

export default RightNav;