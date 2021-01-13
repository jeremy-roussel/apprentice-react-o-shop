import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import loginActions from '../../store/login/loginActions';

const LogOut = () => {

  const dispatch = useDispatch();

  dispatch(loginActions.logout());

  return (
    <>
        <h1>You have logged out!</h1>
        <Link to="/login" className="btn btn-link">
            Login
        </Link>
        <Link to="/" className="btn btn-link">
            Home
        </Link>
    </>
  )
};

export default LogOut;
