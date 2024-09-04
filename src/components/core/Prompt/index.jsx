import React from 'react';
import "./index.css"

const Prompt = () => {
    return (
        <div>
            <div className="chat-input-container">
                <textarea
                    className="chat-input-textarea"
                    placeholder="Type a message..."
                    rows={1}
                />
                <button className="chat-input-send" >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Prompt