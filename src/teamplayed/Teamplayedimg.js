import React from 'react'
import "../styles/Teamplayedimg.css"

function Teamplayedimage({ image, description }) {
  return (
    <div className="img-gallery">
        <img src={image} alt={description} />
    </div>
  )
}

export default Teamplayedimage