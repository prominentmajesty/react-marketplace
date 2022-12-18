import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateFile() {

    const {loggedIn, checkingStatus} = useAuthStatus();

    if(checkingStatus){
        return <Spinner />
    }
//NB Outlet is a react hook that returns child elements.
  return loggedIn ? <Outlet /> : <Navigate to = '/sign-in' />

}

export default PrivateFile