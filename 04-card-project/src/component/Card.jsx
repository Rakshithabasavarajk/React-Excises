import React from 'react'
import { RiBookmarkLine } from 'react-icons/ri'


const Card = (props) => {
  return (
    
      <div className="card">

       <div>
         <div className="top">
            <img src={props.logo} alt=""/>
            <button>Save <RiBookmarkLine size={10}/></button>
        </div>

        <div className="center">

            <h3>{props.companyName}<span>{props.deadline}</span></h3>
            <h2>{props.location}</h2>

          <div className='tag'>
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
       </div>

        <div className="bottom">
          
            
              <div>
                <h3>{props.price}</h3>
                <p>{props.location}</p>
              </div>

              <button>Apply Now</button>
          
        </div>

      </div>
      
    
  
  )
}

export default Card
