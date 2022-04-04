import React from 'react'
import { Card } from 'react-bootstrap'

const ShowShort = ({ customar }) => {
    const { name, img, about, reviews } = customar
    return (
        <div className='col-4 mt-5'>
            <Card className='mx-auto  w-75 px-3 pt-3 my-3' style={{ width: '18rem' }}>
                <Card.Img width="300px" height="230px" className='' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <b className='m-0'>Ratting: {reviews}</b>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ShowShort