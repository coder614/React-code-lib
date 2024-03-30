# This is code we well know about Context the data in the react.js 

## Create the context folder and add this two file codes.


### 1. This is the UserContext2.js
```javascript
import React from 'react'

const UserContext2 = React.createContext()

export default UserContext2;
```

### 2. This is the UserContextPro2.jsx
```javascript
import React, { useState } from "react";
import UserContext2 from "./UserContext2";

const UserContextPro2 = ({ children }) => {
    const [value, setValue] = useState(true)
    return (
        <UserContext2.Provider value={{ value, setValue }}>
            {children}
        </UserContext2.Provider>
    )
}

export default UserContextPro2
```


## Add in the App.jsx file.
```javascript 
import { Outlet } from "react-router-dom"
import Navbar from "./Comp/Navbar/Navbar"
import UserContextPro2 from './Context/UserContextPro2'

function App() {

  return (
    <>
      <UserContextPro2>
        <Navbar />
        <Outlet />
      </UserContextPro2>
    </>
  )
}

export default App
```


## Than the last step is use the context data in you components like :

```javascript 
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
```