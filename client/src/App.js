import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Main from './views/Main'
import Detail from './views/Detail'
import Update from './views/Update'
import CreatePage from './views/CreatePage'
// import Dashboard from './views/Dashboard'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <div className="container mt-5">
      {/* <p>
    <Link to = "/dashboard">Dashboard</Link>
    <br></br>
    <Link to = "/products/new">Create a new product</Link>
  </p> */}

      <Routes>
        <Route element={<Main />} path="/" />
        {/* <Route element = {<Dashboard/>} path ="/dashboard"/> */}
        <Route element={<CreatePage />} path="/products/new" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<Update />} path="/products/:id/edit" />
      </Routes>
    </div>
  )
}

export default App
