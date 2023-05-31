import './App.css'
import { Route, Routes } from 'react-router-dom';
import CMR from './Pages/CMR';
import LogIn from './Auth/LogIn';
import ProtectedRoutes from './Auth/ProtectedRoutes';
import Trucks from './Pages/Trucks';

function App() {

  const Auth = localStorage.getItem("Auth")
  return (
    <div>
      <Routes>
        <Route path='/' element={<LogIn />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/Trucks' element={<Trucks />} />
          <Route path='/CMR' element={<CMR />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
{SidebarData.map(routee => (
            <Route path={routee.link} element={routee.element} />
          ))}
          */