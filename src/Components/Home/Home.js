import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShortReviews from '../ShortReviews/ShortReviews'
import './Home.css'

const Home = () => {
    let navigate = useNavigate()

    const handleReviews = () => {
        navigate(`/reviews`)
    }
    return (
        <div >
            <div>
                <div className='row main-container mt-5'>
                    <div className="col-lg-8 col-sm-12">
                        <div className='my-3 fw-bold'>
                            <h1>World Next Generation  Laptop</h1>
                            <h1 className='text-primary'>Choose Your Best Laptop !!</h1>
                        </div>
                        <p>As the modern workforce skews towards full-blown digital natives,<br /> these professionals are not  just interested in using technology on the job, but in <br /> wielding technology to promote productivity and enable new ways of working.</p>
                        <button type="button" className="btn btn-outline-primary px-4">Live Demo</button>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmrh3mk8tfv7IjPdBWNBzvdw7AbKFA995SA&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <ShortReviews />
            <div className='w-100 d-flex justify-content-center my-5'>
                <button onClick={handleReviews} type="button" className="btn btn-outline-primary showBtton">See All Reviews</button>
            </div>
        </div>
    )
}

export default Home