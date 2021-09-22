import './Sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DisplayPicture from './DisplayPicture';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_setting_header">
                    <div><SearchIcon /></div>
                    <div style={{flex: "1", textAlign: "center"}}>Messages</div>
                    <div><MoreVertIcon /></div>
                </div>
                <div className="sidebar_header_options">
                    <div className="sidebar_header_options_button">All</div>
                    <div className="sidebar_header_options_button">Buying</div>
                    <div className="sidebar_header_options_button">Selling</div>
                </div>
            </div>
            <div className="sidebar_users">
                <div style={{display: "flex", padding: "13px 13px", borderBottom: "1px solid lightgray"}}>
                    <div style={{marginRight: "25px"}}>
                        <DisplayPicture heightofmainimage="48px" heightofuserimage="25px"/>
                    </div>
                    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{
                            color: "#7b7cf0",
                            fontWeight: "bold"
                        }}>Ashwin Rao K</div>
                        <div style={{fontSize: "12px"}}>Lorem ipsum is simply dummy</div>
                    </div>
                    <div>
                        <div>5:30 am</div>
                        <div style={{marginTop: "15px"}}>
                            <div style={{background: "#7b7cf0", color: "white", width: "23px",borderRadius: "50%",height: "23px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", padding: "13px 13px", borderBottom: "1px solid lightgray"}}>
                    <div style={{marginRight: "25px"}}>
                        <DisplayPicture heightofmainimage="48px" heightofuserimage="25px"/>
                    </div>
                    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{
                            color: "#7b7cf0",
                            fontWeight: "bold"
                        }}>Ashwin Rao K</div>
                        <div style={{fontSize: "12px"}}>Lorem ipsum is simply dummy</div>
                    </div>
                    <div>
                        <div>5:30 am</div>
                        <div style={{marginTop: "15px"}}>
                            <div style={{background: "#7b7cf0", color: "white", width: "23px",borderRadius: "50%",height: "23px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", padding: "13px 13px", borderBottom: "1px solid lightgray"}}>
                    <div style={{marginRight: "25px"}}>
                        <DisplayPicture heightofmainimage="48px" heightofuserimage="25px"/>
                    </div>
                    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{
                            color: "#7b7cf0",
                            fontWeight: "bold"
                        }}>Ashwin Rao K</div>
                        <div style={{fontSize: "12px"}}>Lorem ipsum is simply dummy</div>
                    </div>
                    <div>
                        <div>5:30 am</div>
                        <div style={{marginTop: "15px"}}>
                            <div style={{background: "#7b7cf0", color: "white", width: "23px",borderRadius: "50%",height: "23px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", padding: "13px 13px", borderBottom: "1px solid lightgray"}}>
                    <div style={{marginRight: "25px"}}>
                        <DisplayPicture heightofmainimage="48px" heightofuserimage="25px"/>
                    </div>
                    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{
                            color: "#7b7cf0",
                            fontWeight: "bold"
                        }}>Ashwin Rao K</div>
                        <div style={{fontSize: "12px"}}>Lorem ipsum is simply dummy</div>
                    </div>
                    <div>
                        <div>5:30 am</div>
                        <div style={{marginTop: "15px"}}>
                            <div style={{background: "#7b7cf0", color: "white", width: "23px",borderRadius: "50%",height: "23px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", padding: "13px 13px", borderBottom: "1px solid lightgray"}}>
                    <div style={{marginRight: "25px"}}>
                        <DisplayPicture heightofmainimage="48px" heightofuserimage="25px"/>
                    </div>
                    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{
                            color: "#7b7cf0",
                            fontWeight: "bold"
                        }}>Ashwin Rao K</div>
                        <div style={{fontSize: "12px"}}>Lorem ipsum is simply dummy</div>
                    </div>
                    <div>
                        <div>5:30 am</div>
                        <div style={{marginTop: "15px"}}>
                            <div style={{background: "#7b7cf0", color: "white", width: "23px",borderRadius: "50%",height: "23px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
