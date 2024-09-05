import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./reducers/chatSlice";

const reduxStore = configureStore({
    reducer: {
        chat: chatSlice
    }
});

export default reduxStore;