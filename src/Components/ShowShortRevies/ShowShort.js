
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ShowShort.css"
import React from 'react'
import { Card } from 'react-bootstrap'


const ShowShort = ({ customar }) => {
    const { name, img, about, reviews } = customar
    return (
        <div className='col-lg-4 mt-5 d-flex align-items-center justify-content-around '>
            <Card className=' w-100 px-3 pt-3 my-3 card-shadow' style={{ width: '19rem' }}>
                <Card.Img height="230px" className='rounded-circle w-75 mx-auto' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <b className='m-0'>Ratting: {reviews}</b>
                    <span className='ms-2'>

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

export default ShowShort