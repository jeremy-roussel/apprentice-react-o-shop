import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import InputField from '../InputField/InputField';
import { formFields } from '../../utils/constants';
import registerActions from '../../store/register/registerActions';

function RegisterForm() {

    const dispatch = useDispatch();

    const error = useSelector(state => state.register.error)

    const errorField = (error) ? <div>{error}</div> : <div></div>

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

        const user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        }

        if (username && password){
            dispatch(registerActions.register(user))
        }

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
                {errorField}
            </div>
        </div>
  );
};

export default RegisterForm;
