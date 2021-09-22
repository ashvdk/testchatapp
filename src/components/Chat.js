import React from 'react'
import './Chat.css';
import MessagePanel from './MessagePanel';
import Sidebar from './Sidebar';

function Chat() {
    return (
        <div className="chatwindow">
            <div className="chatwindow_content">
                <Sidebar />
                <MessagePanel />
            </div>
        </div>
    )
}

export default Chat
