import React from 'react';
import { useState } from 'react'
import SimpleForm from '../components/SimpleForm';
import InputField from '../components/InputField';

const LoginForm = () => {
    const [formFields, setFormFields] = useState({
        username: '',
        password: '',
      })

    const onSubmit = () => {
        const body = {
            username: formFields.username,
            password: formFields.password
        };
        fetch("http://localhost:8080/auth/api/v1/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"http://localhost:3000"
            },
            body: JSON.stringify(body)
        })
        .then(response => console.log(response.json()))
        .catch( reason => console.log(reason));
    }

    return (
        <div id="login-form">
            <h1>Log In</h1>
            <SimpleForm
                value={formFields}
                onChange={setFormFields}
            >
            <InputField
                name="username"
            />
            <InputField
                name="password"
                type="password"
            />
            <button onClick={() => onSubmit && onSubmit(formFields)}>
                Submit
            </button>
        </SimpleForm>
      </div>
    )
}
export default LoginForm;