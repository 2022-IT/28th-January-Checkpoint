import React from "react"
import { Routes, Route, NavLink as Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home = () => {
  return <div><h2>You are in Home page.</h2></div>
}
export const About = () => {
  return <div><h2>This is the page where you put details about the company.</h2></div>
}
export const NotFound = () => {
  return <div><h2>This is a 404 page</h2></div>
}
export const Dashboard = () => {
  return <div><h2>Dashboard</h2></div>
}

export default App;