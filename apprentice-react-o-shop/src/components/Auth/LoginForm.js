import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import InputField from '../InputField/InputField';

function LoginForm() {
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
    });

    const [loginFormSubmitted, setloginFormSubmitted] = useState(false);

    const { username, password } = loginValues;

    const submitLoginForm = () => {
        setloginFormSubmitted(true);
        localStorage.setItem('user', {username})
        localStorage.setItem('password', {password})
        console.log('submit');
    }

    const updateLoginValues = (event) => {
        const {name, value} = event.target;
        setLoginValues((loginValues) => ({...loginValues, [name]: value}));
    };

  return (
        <div className="container-fluid" id="LoginForm">
            <div className="col-lg-4 offset-lg-4">
                <h2>Login</h2>
                <form name="loginForm" onSubmit={submitLoginForm}>
                    <InputField 
                        FieldType="text"
                        FieldName="username"
                        FieldPlaceholder="Username"
                        FieldValue={username}
                        FieldChangeFunction={updateLoginValues}
                        FormSubmitted={loginFormSubmitted}
                    />
                    <InputField 
                        FieldType="password"
                        FieldName="password"
                        FieldPlaceholder="Password"
                        FieldValue={password}
                        FieldChangeFunction={updateLoginValues}
                        FormSubmitted={loginFormSubmitted}
                    />
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
}

export default LoginForm;
