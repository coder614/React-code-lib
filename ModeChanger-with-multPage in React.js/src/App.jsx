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
