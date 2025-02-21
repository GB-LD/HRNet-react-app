import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

import Layout from './Layout'
import AddEmployee from './AddEmployee'
import EmployeeList from './EmployeeList'
import Home from './HomePage'
import MissingPage from './MissingPage'

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-employee" element={<AddEmployee />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
