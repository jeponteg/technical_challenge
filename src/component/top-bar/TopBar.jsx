import React, { useState } from 'react'
import LOGO from '../../assets/logo.png'
import './topbar.css';

const TopBar = () => {

    const [ open, setOpen ] = useState(false)

    const handleClickOpen = () => setOpen(!open)

    return (
        
        <div class="topnav">

            <div className='logo'>
                <img src = {LOGO}  width ={200}  />
            </div>

            <div class="contenedor-menu-session">
                <ul class="menu">
                    <li onClick={ ()=> handleClickOpen()}><a className= "aSession" href="#">Stefanini NPS (Empleado)</a>
                        {open ? 
                            <ul>
                                <div className='contenedor-info-session'>
                                    <span className='span-label'>ROLES</span>
                                    <span className='span-label-name'>STEFANINI LATAM</span>
                                    <span className='span-label-name'>Javier Enrique Ponte Gonzalez (Postulante)</span>
                                    <button className='button-salir'>Salir</button>
                                </div>
                            </ul>
                        : null}
                    </li>
                </ul>
	        </div>

        </div>
    )
}

export default TopBar