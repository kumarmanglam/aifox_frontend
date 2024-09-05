import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chatHistory: ["hi", "welcome"]
}

const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatHistory(state, action) {
            state.chatHistory = action.payload;
        }
    }
})

export const { setChatHistory } = ChatSlice.actions;

export default ChatSlice.reducer;