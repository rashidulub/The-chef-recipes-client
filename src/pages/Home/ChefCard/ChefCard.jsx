import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  FaHatCowboy,FaHandPointRight, FaRegHandPointRight } from 'react-icons/fa';

const ChefCard = ({chef}) => {
    const { _id, title, recipe,experience, like,details, image_url, author, total_view, rating } = chef
    return (
        <Card className="mb-5 p-5">
        <Card.Header>
           <div className="d-flex justify-content-between align-items-center">
           <h4 className='text-primary'>{author?.name}</h4>
           <h3> <FaHatCowboy /> {author?.experience}</h3>
           </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top"  style={{height:'300px'}} src={image_url} />
          <Card.Text>
            
          </Card.Text>
         <h5 className='text-secondary'> {details}</h5>
         <div>
         
         </div>
        </Card.Body>
        
        <Card.Footer className="">
        <div className="d-flex justify-content-between">
        <h5 className='text-body '> {recipe}</h5>
        <h6 className='text-danger'> <FaRegHandPointRight ></FaRegHandPointRight>  {like}</h6> 

        </div>
        <Link className='text-decoration-none text-white ' to={`/view/${_id}`}><Button className='w-100 mb-0  ' variant="success">Vew Recipes..</Button></Link>
        
        
        </Card.Footer>
    
      </Card>
    );
};

export default ChefCard;