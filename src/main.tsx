import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainTemplate from './templates/MainTemplate/MainTemplate';
import Home from './pages/Home/Home';
import Tuition from './pages/Tuition/Tuition';
import WarningLog from './pages/WarningLog/WarningLog';
import Lasted from './pages/Lasted/Lasted';
import Demo from './pages/Demo/Demo';
import Profile from './pages/Profile/Profile';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path='tuition' element={<Tuition />} />
            <Route path='warning' element={<WarningLog />} />
            <Route path='profile' element={<Profile />} />
      </Route>
      <Route path=''>
            <Route path='lasted' element={<Lasted />} />
            <Route path='demo' element={<Demo />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
