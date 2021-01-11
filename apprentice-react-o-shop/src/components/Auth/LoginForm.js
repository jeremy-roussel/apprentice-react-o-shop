import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import InputField from '../InputField/InputField';
import { formFields } from '../../utils/constants';

function LoginForm() {
    const history = useHistory();

    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
    });

    const [loginFormSubmitted, setloginFormSubmitted] = useState(false);

    const { username, password } = loginValues;

    const submitLoginForm = (event) => {
        event.preventDefault();
        setloginFormSubmitted(true);
        localStorage.setItem('user', username)
        localStorage.setItem('password', password)
        history.push('/home')
    };

    const updateLoginValues = (event) => {
        const {name, value} = event.target;
        setLoginValues((loginValues) => ({...loginValues, [name]: value}));
    };

    const inputFieldList = []

    for (const key in formFields){
        if (formFields[key].login){
            const referenceVariable = (formFields[key].name === "username") ? username : password
            inputFieldList.push(
                    <InputField
                        key={key}
                        FieldType={formFields[key].type}
                        FieldName={formFields[key].name}
                        FieldPlaceholder={formFields[key].placeholder}
                        FieldValue={referenceVariable}
                        FieldChangeFunction={updateLoginValues}
                        FormSubmitted={loginFormSubmitted}
                    />
            )
        }
    };

  return (
        <div className="container-fluid" id="LoginForm">
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
