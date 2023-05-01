import React from 'react';
import chef1 from '../../../assets/chef1.webp'
import chef2 from '../../../assets/chef2.jpg'
import chef3 from '../../../assets/chef3.jpg'

const Chefzone = () => {
    return (
        <div className='bg-light mt-4'>
        <h4>Chef-Zone</h4>
        <img  style={{width:'180px' ,height:'160px'}} src={chef1} alt="" />
        <img  className='mt-3' style={{width:'180px' ,height:'160px'}} src={chef2} alt="" />
        <img className='mt-3' style={{width:'180px' ,height:'160px'}} src={chef3} alt="" />
        
    </div>
    );
};

export default Chefzone;