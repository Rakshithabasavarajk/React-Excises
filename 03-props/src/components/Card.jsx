import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img}/>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, atque.</p>
        <button>view profile</button>
      </div>
      
    </div>
  )
}

export default Card
