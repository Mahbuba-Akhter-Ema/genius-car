import React, { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-5xl'>Loading ...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;