import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='row main-container mt-5'>
            <div className="col-8">
                <div className='my-3 fw-bold'>
                    <h1>World Next Generation  Laptop</h1>
                    <h1 className='text-primary'>Choose Your Best Laptop !!</h1>
                </div>
                <p>As the modern workforce skews towards full-blown digital natives,<br /> these professionals are not  just interested in using technology on the job, but in <br /> wielding technology to promote productivity and enable new ways of working.</p>
                <button type="button" class="btn btn-outline-primary px-4">Live Demo</button>
            </div>
            <div className="col-4">
                <img width="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmrh3mk8tfv7IjPdBWNBzvdw7AbKFA995SA&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Home