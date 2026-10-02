import React from 'react'

const User = (props) => {
  return (
    <div style={{color:"white"}}> 
    {props.name} , {props.age}
    </div>
  )
}

export default User
