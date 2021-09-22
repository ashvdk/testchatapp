import './MessagePanel.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import DisplayPicture from './DisplayPicture';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import ChatMessage from './ChatMessage';

function MessagePanel() {
    return (
        <div className="messagepanel">
            <div style={{display: "flex", background: "#7b7cf0", color: "white", padding: "13px 13px", borderBottomRightRadius: "21px"}}>
                <div style={{marginRight: "25px"}}>
                    <DisplayPicture heightofmainimage="69px" heightofuserimage="30px"/>
                </div>
                <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div>Ashwin Rao K</div>
                    <div style={{marginTop: "10px"}}>online</div>
                </div>
                <div style={{display: "flex",alignItems: "center"}}><MoreVertIcon style={{fontSize: "30px"}}/></div>
            </div>
            <div style={{flex: 1}}>
                <ChatMessage yourself={true}/>
                <ChatMessage yourself={false}/>
                <ChatMessage yourself={false}/>
                <ChatMessage yourself={false}/>
                <ChatMessage yourself={false}/>
                <ChatMessage yourself={true}/>
                <ChatMessage yourself={true}/>
                <ChatMessage yourself={true}/>
            </div>
            <div style={{background: "#eef1ff", display: "flex", padding: "8px 5px"}}>
                <div style={{background: "#7b7cf0"}}><AttachFileIcon style={{color: "white"}}/></div>
                <div style={{flex: 1}}><input type="text" style={{width: "100%", background: "#eef1ff", border: "none", outline: "none", height: "100%", margin: "0 8px"}} placeholder="Type your message"/></div>
                <div><MicIcon style={{color: "#7b7cf0"}}/></div>
            </div>
        </div>
    )
}

export default MessagePanel
