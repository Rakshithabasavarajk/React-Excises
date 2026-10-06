
import './App.css'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
          <div className="top">

              <div >
              <span>$55/h3</span>
              </div> 
          
              <div className="details">
                  <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                  <h3>Wade Wilson</h3>
                  <h6>UI/UX designer</h6>
                  <h5>Epic Coders</h5>                           
              </div>

              <div className="tag">
                  <h4><span>UI</span><span>UX</span><span>Photoshop</span><span>+4</span>           </h4>
              </div>
                    
          </div>

        <div className="center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem!</p>
        </div>

        <div className="bottom">
           <h3>VIEW PROFILE</h3>
        </div>
      </div>
      
    </div>
  )
}

export default App



