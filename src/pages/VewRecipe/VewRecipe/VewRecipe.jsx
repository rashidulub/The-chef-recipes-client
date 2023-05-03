import React from 'react';
import { Card } from 'react-bootstrap';
import { useActionData, useLoaderData } from 'react-router-dom';
import Recipes from '../../shared/Recipes/Recipes';

const VewRecipe = () => {
    const chef = useLoaderData();
    const { _id, title, recipe,experience,recipes, like,details, image_url, author, total_view, rating } = chef
    return (
        <div className='w-75 mx-auto mt-5'>
             <Card>
                <div className='d-flex p-4'>
                <Card.Img  style={{height:'300px' ,width:'500px'}} variant="top" src={image_url} />
                <div className='ms-5 mt-5'>
                <h3 className='text-success'>Her Recipes</h3>
                <ul className='fs-3 '>
                    <li>{recipes?.rs_1}</li>
                    <li>{recipes?.rs_2}</li>
                    <li>{recipes?.rs_3}</li>
                    <li>{recipes?.rs_4}</li>
                   
                </ul>

                </div>
                </div>
    
      <Card.Body>
        <Card.Title className='fw-bold mt-0 fs-1'>{author?.name}</Card.Title>
       
        
      </Card.Body>
    </Card>
            
            <Recipes></Recipes>
        </div>
    );
};

export default VewRecipe;