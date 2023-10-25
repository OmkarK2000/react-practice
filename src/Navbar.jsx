import { useState } from "react"
import "./components/navbar.css"

const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handle = () => {
        setIsToggle(!isToggle)
    }

  return (
    <div  className={`navbar ${isToggle ? "toggle": ""}`} >
        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <button onClick={handle}>X</button>
        </ul>
    </div>
  )
}

export default Navbar