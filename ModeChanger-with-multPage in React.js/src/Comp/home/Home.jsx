import React, { useContext } from 'react'
import UserContext2 from '../../Context/UserContext2'
import './Home.css'

function Home() {
  const { button, setButton, value, setValue, modeChanger } = useContext(UserContext2)

  return (
    <>
      <div className={value ? 'light-mode' : 'dark-mode'} id='home'>
        <h1>Home section</h1>
      </div>
    </>
  )
}

export default Home