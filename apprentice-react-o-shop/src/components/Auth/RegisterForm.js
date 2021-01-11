import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import InputField from '../InputField/InputField';
import { formFields } from '../../utils/constants';

function RegisterForm() {

    const history = useHistory();

    const [registerValues, setRegisterValues] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const [registerFormSubmitted, setRegisterFormSubmitted] = useState(false);

    const { username, password, firstName, lastName } = registerValues;

    const submitRegisterForm = (event) => {
        event.preventDefault();
        setRegisterFormSubmitted(true);
        localStorage.setItem('user', username)
        localStorage.setItem('password', password)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        history.push('/home')
    };

    const updateRegisterValues = (event) => {
        const {name, value} = event.target;
        setRegisterValues((registerValues) => ({...registerValues, [name]: value}));
    };

    const inputFieldList = [];

    for (const key in formFields){
        if (formFields[key].register){
            var referenceVariable;
            switch (formFields[key].name) {
                case "username":
                    referenceVariable = username
                    break;
                case "password":
                    referenceVariable = password
                    break;
                case "lastName":
                    referenceVariable = lastName
                    break;
                case "firstName":
                    referenceVariable = firstName
                    break;
                default:
                    break;
            };
            inputFieldList.push(
                    <InputField
                        key={key}
                        FieldType={formFields[key].type}
                        FieldName={formFields[key].name}
                        FieldPlaceholder={formFields[key].placeholder}
                        FieldValue={referenceVariable}
                        FieldChangeFunction={updateRegisterValues}
                        FormSubmitted={registerFormSubmitted}
                    />
            )
        };
    };

  return (
        <div className="container-fluid" id="RegisterForm">
            <div className="col-lg-4 offset-lg-4">
                <h2>Register</h2>
                <form name="RegisterForm" onSubmit={submitRegisterForm}>
                    {inputFieldList}
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default RegisterForm;
