import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import AddEmployee from './AddEmployee'
import EmployeeList from './EmployeeList'
import Home from './HomePage'
import MissingPage from './MissingPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-employee" element={<AddEmployee />}></Route>
        <Route path="/employee-list" element={<EmployeeList />}></Route>
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  )
}

export default App
