import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    const chef = useLoaderData();
    const { recipes_img, recipes, rating, cook } = chef

    const handleFavorite =()=>{
        toast("Added To Favorite");
    }
    return (
        <div className='mt-5 '>
            <h3 className='text-danger'>Recipes And How to Cook</h3>
            <Row xs={1} md={1} lg={2} className="g-4 mt-3">

                <Col >
                    <Card>
                        <Card.Img style={{ height: '250px', }} variant="top" src={recipes_img?.img_1} />
                        <Card.Body>
                            <Card.Title>{recipes?.rs_1}</Card.Title>
                            <Card.Text>
                                <h6 className='text-success'>{cook?.title_1}:</h6>
                                <p className='fs-8'>{cook?.Ingredients}</p>
                                <h6 className='text-success'>{cook?.title_2}:</h6>
                                <p className='fs-8'>{cook?.details}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex ">
                            <div className='flex-grow-1 align-items-center' >
                                <Rating
                                    placeholderRating={rating.number}
                                    readonly

                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span className='ml-5'>{rating?.number}</span>
                            </div >
                           
                            <div onClick={handleFavorite} >
                            <FaHeart  className='text-danger'></FaHeart>

                            </div>
                        </Card.Footer>
                        
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img style={{ height: '250px', }} variant="top" src={recipes_img?.img_2} />
                        <Card.Body>
                            <Card.Title>{recipes?.rs_2}</Card.Title>
                            <Card.Text>
                                <h6 className='text-success'>{cook?.title_1}:</h6>
                                <p className='fs-8'>{cook?.Ingredients}</p>
                                <h6 className='text-success'>{cook?.title_2}:</h6>
                                <p className='fs-8'>{cook?.details}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex ">
                            <div className='flex-grow-1 align-items-center' >
                                <Rating
                                    placeholderRating={rating.number}
                                    readonly

                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span className='ml-5'>{rating?.number}</span>
                            </div >
                           
                            <div onClick={handleFavorite}>
                            <FaHeart  className='text-danger'></FaHeart>

                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img style={{ height: '250px', }} variant="top" src={recipes_img?.img_3} />
                        <Card.Body>
                            <Card.Title>{recipes?.rs_3}</Card.Title>
                            <Card.Text>
                                <h6 className='text-success'>{cook?.title_1}:</h6>
                                <p className='fs-8'>{cook?.Ingredients}</p>
                                <h6 className='text-success'>{cook?.title_2}:</h6>
                                <p className='fs-8'>{cook?.details}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex ">
                            <div className='flex-grow-1 align-items-center' >
                                <Rating
                                    placeholderRating={rating.number}
                                    readonly

                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span className='ml-5'>{rating?.number}</span>
                            </div >
                           
                            <div onClick={handleFavorite} >
                            <FaHeart  className='text-danger'></FaHeart>

                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img style={{ height: '250px', }} variant="top" src={recipes_img?.img_4} />
                        <Card.Body>
                            <Card.Title>{recipes?.rs_4}</Card.Title>
                            <Card.Text>
                                <h6 className='text-success'>{cook?.title_1}:</h6>
                                <p className='fs-8'>{cook?.Ingredients}</p>
                                <h6 className='text-success'>{cook?.title_2}:</h6>
                                <p className='fs-8'>{cook?.details}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex ">
                            <div className='flex-grow-1 align-items-center' >
                                <Rating
                                    placeholderRating={rating.number}
                                    readonly

                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span className='ml-5'>{rating?.number}</span>
                            </div >
                           
                            <div onClick={handleFavorite} >
                            <FaHeart className='text-danger'></FaHeart>

                            </div>
                        </Card.Footer>

                    </Card>
                </Col>


            </Row>
            
        </div>
    );
};

export default Recipes;