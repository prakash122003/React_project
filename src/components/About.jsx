import React from 'react'
import {NavLink} from 'react-router-dom'

const About = () => {
  return (
    <div>

      <div className="container py-5 my-5">
        <div className="row">

          <div className="col-md-6">

            <h1 className='text-primary fw-bold mb-4'>About Us</h1>

            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi quam optio possimus rem, perspiciatis dolor, accusantium maiores neque nostrum sequi, dignissimos recusandae harum. Veritatis voluptatem corrupti recusandae nesciunt quidem animi nam minus eligendi quia exercitationem nemo a assumenda vel beatae, rerum ad deleniti, voluptate repellat. Quibusdam ipsam alias officia?
            </p>

            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>

          </div>

          <div className="col-md-6 d-flex justify-content-center">

            <img src="/assets/images/about.jpg" alt="About Us" height="400px" width="400px" />
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default About