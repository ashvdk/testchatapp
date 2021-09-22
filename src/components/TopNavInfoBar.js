import React from 'react'
import './TopNavInfoBar.css';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function TopNavInfoBar() {
    return (
        <div className="topinfonavbar">
            <div className="topinfonavbar_content">
                <div className="pointer"><EmailIcon style={{position: "relative", top: "5px", left: "-3px"}}/><span>info@stskproperties.com</span></div>
                <div className="pointer"><PhoneIcon style={{position: "relative", top: "5px", left: "-3px"}}/><span>080-4149-2575</span></div>
                <div className="pointer">Languages <ArrowDropDownIcon style={{position: "relative", top: "5px"}}/></div>
                <div className="pointer"><FacebookIcon /></div>
                <div className="pointer"><TwitterIcon /></div>
                <div className="pointer"><InstagramIcon /></div>
                <div className="pointer"><PinterestIcon /></div>
            </div>
        </div>
    )
}

export default TopNavInfoBar
