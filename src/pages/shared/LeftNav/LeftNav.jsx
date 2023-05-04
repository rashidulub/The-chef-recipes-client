import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chefzone from '../Chefzone/Chefzone';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-chef-recipes-server-rashidulub.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])


    return (
        <div>
            <h4 className='mt-4 mb-4 ' > Famous Country For Chef-</h4>
           <div className="ps-2 text-danger ">
           { 
                categories.map(category =><h5
                 key={category.id}>
                    <Link cl to={ `/category/${category.id}`} className='text-decoration-none text-danger '>{category.name}</Link>

                </h5> )
            }
           </div>
           <Chefzone></Chefzone>
        </div>
    );
};

export default LeftNav;