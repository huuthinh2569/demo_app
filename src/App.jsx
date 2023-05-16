import React from "react"
import {
  Route,
  Routes,
} from "react-router-dom"
import Register from './view/register';
import NotFound from './view/Notfound';
import Dashboard from './view/dasboard';
import Login from './view/login';
import HomePage from "./view/homepage";
import Manager from "./view/manager";
export default function App() {
  const email = localStorage.getItem("currentEmail");
  return (
    <Routes>
      <Route path='/' element={email ? <Manager></Manager> : <HomePage></HomePage>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}
