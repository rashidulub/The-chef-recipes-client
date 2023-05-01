import React from 'react';
import food1 from '../../../assets/zzone1.jpeg'
import food2 from '../../../assets/zzone2.webp'
import food3 from '../../../assets/zzone-3.webp'


const FoodZone = () => {
    return (
        <div className='bg-light mt-4'>
            <h4>Food-Zone</h4>
            <img  style={{width:'180px' ,height:'160px'}} src={food1} alt="" />
            <img  className='mt-3' style={{width:'180px' ,height:'160px'}} src={food2} alt="" />
            <img className='mt-3' style={{width:'180px' ,height:'160px'}} src={food3} alt="" />
            
        </div>
    );
};

export default FoodZone;