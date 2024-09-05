import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ChatContainer from '../components/core/ChatContainer';

const RouterContainer = () => {
    return (<Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/foxai' element={<ChatContainer />} />
    </Routes>)

}

export default RouterContainer;