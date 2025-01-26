import React from 'react'
import './MaturePopup.css';

function MaturePopup( props: any ) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn text-white bg-red-500 rounded py-1 px-2" onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default MaturePopup