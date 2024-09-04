import React from 'react'
import "./style.css"

import { Tooltip } from 'react-tooltip';

// import { fox } from "../../../assets/icons/fox.png"

import fox from "../../../assets/icons/fox.png";

import fox2 from "../../../assets/icons/fox2.png";
import copy from "../../../assets/icons/copy.png";
import read_aloud from "../../../assets/icons/read_aloud.png";
import restart from "../../../assets/icons/restart.png";

const ChatContainer = () => {
    const chatHistory = [
        {
            "Human": "Hi",
            "AI": "Hello! How can I assist you today?"
        },
        {
            "Human": "how are you?",
            "AI": "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with whatever you need! How can I assist you today?"
        },
        {
            "Human": "how are you?",
            "AI": "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with whatever you need! How can I assist you today?"
        },
        {
            "Human": "how are you?",
            "AI": "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with whatever you need! How can I assist you today?"
        },
        {
            "Human": "how are you?",
            "AI": "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with whatever you need! How can I assist you today?"
        },
        {
            "Human": "how are you?",
            "AI": "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with whatever you need! How can I assist you today?"
        }
    ]
    return (
        <div className='chat-container'>
            <div className='chat-box'>
                <div className='chat-log'>
                    {chatHistory.map((item, key) => {
                        return (
                            <div>
                                <div className='chat-message chat-human'>
                                    <div className='human-message'>{item["Human"]}</div>
                                </div>
                                <div className='chat-message chat-ai'>
                                    <div className='ai-avatar'><img src={fox} className='fox-icon' /></div>
                                    <div className='ai-response'>
                                        <div className='ai-message'>{item["AI"]} </div>
                                        <div className='ai-actions'>
                                            <a data-tooltip-id="tooltip-read-aloud">
                                                <img src={read_aloud} className='action-icon' alt="Read Aloud" />
                                            </a>
                                            <Tooltip
                                                id="tooltip-read-aloud"
                                                content="Read Aloud"
                                                place='bottom'
                                            />

                                            <a data-tooltip-id="tooltip-copy">
                                                <img src={copy} className='action-icon' alt="Copy" />
                                            </a>
                                            <Tooltip
                                                id="tooltip-copy"
                                                content="Copy"
                                                place='bottom'
                                            />

                                            <a data-tooltip-id="tooltip-restart">
                                                <img src={restart} className='action-icon' alt="Restart" />
                                            </a>
                                            <Tooltip
                                                id="tooltip-restart"
                                                content="Restart"
                                                place='bottom'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatContainer