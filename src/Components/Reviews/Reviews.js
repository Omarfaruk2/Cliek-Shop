// import React, { useEffect, useState } from 'react'
import AllRevies from '../AllRevies/AllRevies'
import useReviews from '../Customhooks/Customhook'
// import ShortReviews from '../ShortReviews/ShortReviews'
import "./Reviews.css"


const Reviews = () => {
    const [customars] = useReviews()
    return (
        <div className='row w-90'>
            {
                customars.map(customar => <AllRevies
                    customar={customar}
                    key={customar.id}
                ></AllRevies>
                )
            }
        </div>
    )
}

export default Reviews