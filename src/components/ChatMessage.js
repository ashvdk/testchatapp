import React from 'react'
import './ChatMessage.css';

function ChatMessage({yourself}) {
    return (
        <div>
            {yourself ? <div style={{display: "flex", width: "240px", marginRight: "auto"}}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{height: "30px"}}/>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <div style={{background: "#eef1ff", padding: "10px 15px", borderRadius: "11px"}}>Lorem ipsum is simple</div>
                    <div style={{ fontSize: "11px", color: "grey"}}>Yesterday 14:26 pm </div>
                </div>
            </div> : <div style={{display: "flex", width: "240px", marginLeft: "auto"}}>
                
                <div style={{marginLeft: "10px"}}>
                    <div style={{background: "#eef1ff", padding: "10px 15px", borderRadius: "11px"}}>Lorem ipsum is simple</div>
                    <div style={{ fontSize: "11px", color: "grey"}}>Yesterday 14:26 pm </div>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{height: "30px"}}/>
                </div>
            </div>}
            
        </div>
    )
}

export default ChatMessage
