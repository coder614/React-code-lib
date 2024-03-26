import React, { useState } from "react";
import UserContext2 from "./UserContext2";

const UserContextPro2 = ({ children }) => {
    const [button, setButton] = useState(<i class="ri-moon-fill"></i>)
    const [value, setValue] = useState(true)
    const modeChanger = () => {
        if (value == false) {
            setButton(<i class="ri-moon-fill"></i>)
        } else {
            setButton(<i class="ri-sun-fill"></i>)
        }
        setValue(!value)
    }
    return (
        <UserContext2.Provider value={{ button, setButton, value, setValue, modeChanger }}>
            {children}
        </UserContext2.Provider>
    )
}

export default UserContextPro2