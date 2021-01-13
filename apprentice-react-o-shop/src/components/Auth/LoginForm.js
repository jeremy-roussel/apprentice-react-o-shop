import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import InputField from '../InputField/InputField';
import { formFields } from '../../utils/constants';
import { loginActions } from '../../store/login/loginActions'

function LoginForm() {

    const dispatch = useDispatch();

    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
    });

    const [loginFormSubmitted, setloginFormSubmitted] = useState(false);

    const { username, password } = loginValues;

    const submitLoginForm = (event) => {
        event.preventDefault();
        setloginFormSubmitted(true);
        
        if (username && password){
            dispatch(loginActions.login(username, password))
        }
    };

    const updateLoginValues = (event) => {
        const {name, value} = event.target;
        setLoginValues((loginValues) => ({...loginValues, [name]: value}));
    };

    const inputFieldList = []

    formFields.forEach(inputObject => {
        if (inputObject.login){
            const referenceVariable = (inputObject.name === "username") ? username : password
            inputFieldList.push(
                <InputField
                    key={inputObject.name}
                    FieldType={inputObject.type}
                    FieldName={inputObject.name}
                    FieldPlaceholder={inputObject.placeholder}
                    FieldValue={referenceVariable}
                    FieldChangeFunction={updateLoginValues}
                    FormSubmitted={loginFormSubmitted}
                />
        )
        }
    })

  return (
        <div className="container-fluid form-offset">
            <div className="col-lg-4 offset-lg-4">
                <h2>Login</h2>
                <form name="loginForm" onSubmit={submitLoginForm}>
                    {inputFieldList}
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default LoginForm;
