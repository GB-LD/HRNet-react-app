import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header className='flex flex-row justify-between items-center p-4 bg-light-blue-900 text-white'>
            <div>HRnet</div>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/create-employee"> Create an employee</NavLink> |
                <NavLink to="/employee-list"> Employee list</NavLink>
            </nav>
        </header>
        <main className='p-4'>
            <Outlet />
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout