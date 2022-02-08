import React from 'react'
import './desktop.css'
import ESCRITORIO from '../../assets/escritorio.png'

const Desktop = () => {

    return (

        <div className='mainDesktopContainer'>

            <div className='desktopTitle'><h1>No tiene evaluaciones ni tareas pendientes :)</h1></div>

            <div className='desktopImage'>

                <img src={ESCRITORIO} />
                
            </div>
            
        </div>
    )
}

export default Desktop