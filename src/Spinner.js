import React from 'react'

const Spinner = () => {
  return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
  )
}

export default Spinner