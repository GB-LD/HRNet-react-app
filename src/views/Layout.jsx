import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <header>
            <div>HRnet</div>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/create-employee"> Create an employee</NavLink> |
                <NavLink to="/employee-list"> Employee list</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
  )
}

export default Layout