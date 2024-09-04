import React from 'react';

import "./style.css";
import submit from "../../../assets/icons/submit.svg"
import upload2 from "../../../assets/icons/upload2.png"

const InputPrompt = () => {
    return (
        <div className='input-prompt'>
            <div className="chat-input-container">
                <input
                    className="chat-input-textarea"
                    placeholder="Message FoxAI"
                />
                <button className="chat-input-send" >
                    <img src={upload2} className='upload-icon' />
                </button>
            </div>
            <div className='disclaimer-box'>
                <p>FoxAI can mistakes. Check important info.</p>
            </div>
        </div>
    )
}

export default InputPrompt;