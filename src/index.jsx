import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './view/login';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Register from './view/register';
import Loader from './view/loader';
import NotFound from './view/Notfound';
import Dashboard from './view/dasboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='login/loader' element={<Loader></Loader>}></Route>
          <Route path='login/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
