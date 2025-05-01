import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../utils/InputField';
import { UserDataContext } from '../../data/DataProvider';
import { handleDataChange } from '../../utils/onChangeHandler';
import './SignupPage.css';

const SignupPage = () => {
    let navigate = useNavigate();
    let { userDetails, setUserDetails } = useContext(UserDataContext);

    return (
        <div
            className="signup-container"
        >
            <h1>
                Create your <br /> PopX account
            </h1>
            <form
                onChange={(event) =>
                    handleDataChange(event, userDetails, setUserDetails)
                }
                onSubmit={(event) => {
                    event.preventDefault();
                    navigate('/login');
                }}
            >
                <InputField
                    fieldName="Full Name"
                    inputType="text"
                />
                <InputField
                    fieldName="Phone Number"
                    inputType="tel"
                />
                <InputField
                    fieldName="Email Address"
                    inputType="email"
                />
                <InputField
                    fieldName="Password"
                    inputType="password"
                />
                <InputField
                    fieldName="Company Name"
                    inputType="text"
                />

                <div
                    className="agency-selection"
                >
                    <label
                        htmlFor="isAgency"
                    >
                        Are you an Agency?
                        <span>*</span>

                    </label>
                    <div
                        className="radio-group"
                    >
                        <div
                            className="radio-option"
                        >
                            <input
                                type="radio"
                                name="isAgency"
                                id="Yes"
                                value="Yes"
                            />
                            <label
                                htmlFor="Yes"
                            >
                                Yes
                            </label>

                        </div>
                        <div
                            className="radio-option"
                        >
                            <input
                                type="radio"
                                name="isAgency"
                                id="No"
                                value="No"
                            />
                            <label
                                htmlFor="No"
                            >
                                No
                            </label>

                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupPage;
