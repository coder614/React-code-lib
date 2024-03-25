import React, { useState } from 'react'
import './App.css'

function App() {
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
    <>
      <div className={value ? 'light-mode' : 'dark-mode'} id='navbar'>
        <div className="logo"><h1 className='text-3xl font-bold'>LOGO</h1></div>
        <div className="nav-list">
          <button onClick={modeChanger} className='text-3xl font-extralight'>{button}</button>
        </div>
      </div>

      <div className={value ? 'light-mode' : 'dark-mode'} id="home">
        <div className="text">
          <h1 className='text-4xl font-extrabold mb-3'>Mode changer.</h1>
          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet culpa unde, debitis mollitia laboriosam aspernatur cum itaque voluptatibus minima dignissimos. Quos alias, aperiam quibusdam quaerat, quas ab sequi dicta, deserunt fugiat cumque minus. Tenetur modi numquam eligendi. Nam, esse animi! Aperiam fugiat, beatae aliquam impedit sunt molestias consectetur animi nemo.</p>
        </div>
      </div>
    </>
  )
}

export default App