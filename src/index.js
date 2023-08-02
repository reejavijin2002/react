import React from 'react';
import ReactDOM  from 'react-dom/client';
// import Api from './Api';
//  import App1 from './App1';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Todo from './Todo';





import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Error from './Error';
import Layout from './Layout';
import Account from './Account';
import Password from './Password';
import Security from './Security';
import Application from './Application';
import Notification from './Notification';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Todo/> */}
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path="" element={<Account/>}/>
            <Route path="Password" element={<Password/>}/>
            <Route path="Security" element={<Security/>}/>
            <Route path="Application" element={<Application/>}/>
            <Route path="Notification" element={<Notification/>}/>
            <Route path='*' element={<Error/>}/>
            </Route>

            
        



        </Routes>
        </BrowserRouter>
    
  </React.StrictMode>
);

