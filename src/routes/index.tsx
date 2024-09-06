import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ChatContainer from '../components/core/ChatContainer';
import Layout from '../components/Layout';


const RouterContainer = () => {
    return (<Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />} >
            <Route path='/foxai' element={<ChatContainer />} />
        </Route>
    </Routes>)

}

export default RouterContainer;