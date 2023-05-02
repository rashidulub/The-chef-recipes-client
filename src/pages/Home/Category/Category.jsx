import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Category = () => {
    const {id} = useParams();
    const categoriChef = useLoaderData()
    return (
        <div className='mt-5'>
           
            {
                categoriChef.map(chef=>
                    <ChefCard
                    key={chef._id}
                    chef={chef}
                    ></ChefCard>)
            }
        </div>
    );
};

export default Category;