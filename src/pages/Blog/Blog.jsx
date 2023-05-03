import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 ms-5 w-75 '>
            <div className=''>
                <h1 className='fs-2 text-success'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                <p className='fs-5'> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div>
                <h1 className='fs-2 text-info'>2. How to validate React props using PropTypes?</h1>
                <p  className='fs-5'> 1.PropTypes.any : The prop can be of any data type. <br />
                    2.PropTypes.bool : The prop should be a Boolean.<br />
                    3.PropTypes.number : The prop should be a number.<br />
                    4.PropTypes.string : The prop should be a string.<br />
                    5.PropTypes.func : The prop should be a function.<br />
                    6.PropTypes.array : The prop should be an array..</p>
            </div>
            <div>
                <h1 className='fs-2 text-danger'>3. Tell us the difference between nodejs and express js?</h1>
                <p  className='fs-5'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            </div>
            
            <div>
                <h1 className='fs-2 text-dark'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p  className='fs-5'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            </div>
        </div>
    );
};

export default Blog;