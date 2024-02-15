import React from 'react'

export default function Information() {
  return (
    <React.Fragment>
      <div className='profile'></div>
      <div className='information'>
        <h2>laura smith</h2>
        <h3>frontend developer</h3>
        <span>laurasmith.website</span>
      </div>
      <div className='btn'>
        <button>
            <i className="fa-solid fa-envelope"></i>
            Email
        </button>
        <button>
            <i className="fa-brands fa-linkedin"></i>
            linkedin
        </button>
      </div>
    </React.Fragment>
  )
}
