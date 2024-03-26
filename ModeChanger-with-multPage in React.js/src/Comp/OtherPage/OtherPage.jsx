import React, { useContext } from 'react'
import UserContext2 from '../../Context/UserContext2'
import './OtherPage.css'

function OtherPage() {
    const { button, setButton, value, setValue, modeChanger } = useContext(UserContext2)
    return (
        <div className={value ? 'light-mode' : 'dark-mode'} id='otherPage'>
            <h1>Other website page</h1>
        </div>
    )
}

export default OtherPage