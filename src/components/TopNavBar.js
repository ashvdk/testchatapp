import './TopNavBar.css';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';

function TopNavBar() {
    return (
        <div className="topnavbar">
            <div className="topnavbar_content">
                <div className="item">
                    <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" style={{height: "40px"}}/>
                </div>
                <div className="item1"><div><AddIcon style={{position: "relative", top: "5px"}}/>Post Property Ad</div></div>
                <div className="item"><div><LocalShippingIcon style={{position: "relative", top: "5px"}}/> Packers & Movers</div></div>
                <div className="item"><ChatIcon style={{position: "relative", top: "5px"}}/></div>
                <div className="item"><NotificationsIcon style={{position: "relative", top: "5px"}}/></div>
                <div className="item"><AccountCircleIcon style={{position: "relative", top: "5px"}}/>Ashwin Rao K</div>
                <div className="item"><DehazeIcon style={{position: "relative", top: "5px"}}/></div>
            </div>
        </div>
    )
}

export default TopNavBar
