import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Category = () => {
    const {id} = useParams();
    const categoriChef = useLoaderData()
    return (
        <div>
            <h2>this is a Category: {categoriChef.length}</h2>
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