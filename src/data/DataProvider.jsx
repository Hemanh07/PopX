import { createContext, useState } from 'react'


export const UserDataContext = createContext({});


export const UserDataProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({
        FullName: "",
        EmailAddress: "",
        Password: "",
        CompanyName: "",
        PhoneNumber: 0,
        isAgency: ""
    })
    return (
        <UserDataContext.Provider
            value={{
                userDetails, setUserDetails
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

