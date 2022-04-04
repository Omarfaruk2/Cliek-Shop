

import React from 'react'
import { Card } from 'react-bootstrap'
import "./AllReviws.css"
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const AllRevies = ({ customar }) => {
    const { name, img, about, reviews } = customar

    return (
        <div className='col-lg-4 col-sm-12'>
            <Card className='mx-auto  w-75 px-3 pt-3 my-3' style={{ width: '18rem' }}>
                <Card.Img width="300px" height="230px" className='' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <b className='m-0'>Ratting: {reviews}</b>
                    <span className='ms-2' >

                        <Rating
                            initialRating={reviews}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly

                        ></Rating>

                    </span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AllRevies