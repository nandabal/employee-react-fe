
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import EmployeeForm from './components/EmployeeForm'
import Base from './components/Base'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Base child={<Home/>}/>}/>
        <Route path='/form' element={<Base child={<EmployeeForm/>}/>}/>
      </Routes>
    </>
  )
}

export default App
