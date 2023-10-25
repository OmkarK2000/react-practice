import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./forRouting/Home"
import Contact from "./forRouting/Contact"
import About from "./forRouting/About"

const RoutingEx = () => {
    return (
        <div>
            <BrowserRouter>

                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link>  </li>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutingEx