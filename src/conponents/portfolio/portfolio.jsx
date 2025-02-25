import React from 'react'
import './portfolio.css'
import pimg from '../../img/portfolio.bmp'
export const Portfolio = () => {
  return (
    
    <div id='portfolio'>
        <h5>My Recent Work</h5>
        <h1>Portfolio</h1>
        <div className="portfolio-project">
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
            <div className="project-item">
                <img src={pimg} alt="error" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <a href="" className='btn btn-cv'>Github</a>
                <a href="" className='btn btn-talk'>Live Demo</a>
            </div>
           
        </div>
    </div>
  )
}
