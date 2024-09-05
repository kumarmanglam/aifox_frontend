import React, { useEffect, useRef, useState } from 'react';

import "./style.css";
import upload2 from "../../../assets/icons/upload2.png"
import { useSelector } from 'react-redux';
import { selectChatHistory } from '../../../store/selectors/chatSelector';
export interface ChatEntry {
    Human: string,
    AI: string,
}
const InputPrompt = () => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [query, setQuery] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.style.opacity = buttonDisabled ? '0.5' : '1';
            buttonRef.current.style.cursor = buttonDisabled ? 'initial' : 'pointer'
        }
    }, [buttonDisabled]);

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setButtonDisabled(e.target.value.trim().length == 0);
    }

    const handlePromptSubmit = async () => {
        // await hitAPI(query);
        const response = "Hello! How can I assist you today?";
        // chatHistory.push
        // after receiving the response, update response in chatHistory 
        const chatEntry = {
            "Human": query,
            "AI": response,
        };
        setChatHistory([...chatHistory, chatEntry]);
    }

    const chat = useSelector(selectChatHistory);

    console.log(chat);


    return (
        <div className='input-prompt'>
            <div className="chat-input-container">
                <input
                    className="chat-input-textarea"
                    placeholder="Message FoxAI"
                    value={query}
                    onChange={(e) => handleInputValueChange(e)}
                />
                <button ref={buttonRef} className=' chat-input-send ' >
                    <img src={upload2} className={`upload-icon ${buttonDisabled ? 'disabled-button' : 'show-button'}}`} />
                </button>
            </div>
            <div className="disclaimer-box">
                <p>FoxAI can mistakes. Check important info.</p>
            </div>
        </div>
    )
}

export default InputPrompt;