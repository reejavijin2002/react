import React from 'react';
import ReactDOM  from 'react-dom/client';




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
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="Account" element={<Account/>}/>
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

