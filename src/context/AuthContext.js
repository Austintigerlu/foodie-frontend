import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = (props) => {
    return(
        <AuthContext.Provider value={props.name}>
            {props}
        </AuthContext.Provider>
    )
}