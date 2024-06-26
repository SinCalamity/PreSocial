import React from 'react'

function Rating({value, text, color}) {
  return (
    <div className='rating'>
        <span>
            <i style={{color}} className={
                value >= 1
                ? 'fas fa-star'
                : value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        </span>
        <span>{text && text}</span>
    </div>
  )
}

export default Rating