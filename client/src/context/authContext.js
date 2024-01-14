import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext(); //context object

//create context provider
export const AuthContextProvider = ({ children }) => {

    //store currentuser id in localstorage after login
    const [currentuser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        await axios.post("/auth/login", inputs)
        .then((res) => {
            setCurrentUser(res.data);
            //navigate("/");
        })
    };

    const logout = async () => {
        await axios.post("/auth/logout")
        .then(() => {
            setCurrentUser(null);
        })
    }

    //update the currentUser info after login
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentuser));
    }, [currentuser])
    

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};
