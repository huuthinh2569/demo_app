import React from "react"
import {
  Link, Route,
  Routes,
} from "react-router-dom"
import Register from './view/register';
import Loader from './view/loader';
import NotFound from './view/Notfound';
import Dashboard from './view/dasboard';
import Login from './view/login';
export default function App() {
  return (
    <div className="w-full h-full bg-yellow-100 flex items-center">
      <div className="m-auto text-center">
        <h1 className="text-5xl font-bold text-sky-500 ">
          Hello world!
        </h1>
        <nav className="border-b pb-4">
          <Link to={"/login"}>Login</Link> |
          <Link to={"/register"}>Register</Link>
        </nav>
        <Routes>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='login/loader' element={<Loader></Loader>}></Route>
          <Route path='login/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  )
}
