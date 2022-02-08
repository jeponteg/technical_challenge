import React, {useState} from 'react'
import './acordeon.css'

const Acordeon = () => {

    const [ open, setOpen ] = useState(false)

    const handleClickOpen = () => setOpen(!open)
    
    return (

        <div class="contenedor-menu">

            <ul class="menu">

                <li className='contenedor-li'><i className="icono fa fa-tachometer-alt"></i><a href="#">Escritorio</a></li>

                <li className='contenedor-li' onClick={ ()=> handleClickOpen()}><i className="icono fa fa-store"></i><a href="#">Empresa</a></li>
                    {open ? <li className='contenido-li'><i className="icono fa fa-user"></i><a href="#">Mi perfil</a></li> : null}
                    {open ? <li className='contenido-li'><i className="icono fa fa-clipboard"></i><a href="#">Directorio</a></li>: null} 

            </ul>

	    </div>
    )
}

export default Acordeon