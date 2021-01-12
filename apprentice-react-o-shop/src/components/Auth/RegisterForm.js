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
        const login = {
            user: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        }
        localStorage.setItem('login', JSON.stringify(login))
        history.push('/home')
    };

    const updateRegisterValues = (event) => {
        const {name, value} = event.target;
        setRegisterValues((registerValues) => ({...registerValues, [name]: value}));
    };

    const inputFieldList = [];

    formFields.forEach(inputObject => {
        if (inputObject.register){
            var referenceVariable;
            switch (inputObject.name) {
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
                    key={inputObject.name}
                    FieldType={inputObject.type}
                    FieldName={inputObject.name}
                    FieldPlaceholder={inputObject.placeholder}
                    FieldValue={referenceVariable}
                    FieldChangeFunction={updateRegisterValues}
                    FormSubmitted={registerFormSubmitted}
                />
        )
        }
});

  return (
        <div className="container-fluid form-offset">
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
