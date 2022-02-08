import React, { useState } from 'react'
import ProfilePhoto from '../component/ProfilePhoto';
import TopBar from '../component/top-bar/TopBar';
import Acordeon from '../component/acordeon/Acordeon'
import './layout.css';

const Layout = ({children}) => {

    const [width, setWidth] = useState(50)

    const handleClickOpen = () => setWidth(250)
    const handleClickClose = () => setWidth(50)

    return (
        <>
            <TopBar />
            <div 
                className="sidebar"
                style={{width}}
                onMouseEnter={() => handleClickOpen()}  
                onMouseLeave = {() => handleClickClose()} 
            >
                <div className="profilePhoto">
                    <ProfilePhoto />
                </div>

               <Acordeon />
            
            </div>

            <div className="content" >
                {children}
            </div>
            
        </>
    )
}

export default Layout