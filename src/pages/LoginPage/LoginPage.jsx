import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleDataChange } from '../../utils/onChangeHandler';
import InputField from '../../utils/InputField';
import { UserDataContext } from '../../data/DataProvider';
import './LoginPage.css';

const LoginPage = () => {
    let navigate = useNavigate();
    let { userDetails, setUserDetails } = useContext(UserDataContext);

    return (
        <div
            className="login-container"
        >
            <h1>
                Signin to your PopX account
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a!
            </p>

            <form
                onChange={(event) =>
                    handleDataChange(event, userDetails, setUserDetails)
                }
                onSubmit={(event) => {
                    event.preventDefault();
                    navigate('/home');
                }}
            >
                <InputField
                    fieldName="Email Address"
                    inputType="email"
                />
                <InputField
                    fieldName="Password"
                    inputType="password"
                />
                <button
                    type="submit"
                >Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
