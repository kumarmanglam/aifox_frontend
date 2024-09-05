import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../../store/selectors/userSelector';
import { Navigate } from 'react-router-dom';

const AuthenticatedComponent = (children: any) => {
    const isAuthenticated = useSelector(selectIsUserLoggedIn);
    if (isAuthenticated) {
        return children;
    }
    return (
        <Navigate to="/login" />
    )
}

export default AuthenticatedComponent;