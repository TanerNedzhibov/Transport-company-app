import React, { useEffect } from 'react'
import { SidebarData } from '../Assets/SidebarData';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import Alert from './Alert';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

//style={{textAlign: "center",marginTop: "60px",width: "100%", height:"100px",color: "white"}}

const Sidebar = () => {

  const Navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("Auth");
    setTimeout(() => Navigate("/"), 500);
  }
  let WarningBubble = localStorage.getItem("WarningBubble")

  return ( 
    <div id='sideBarContainer' style={{backgroundColor: "#171b2e", width: "300px", height: "100%"}}>
      <div id='iconContainer' ><div id='logoPad'><LocalShippingIcon fontSize='large' sx={{color: 'white'}}/></div></div>
      <ul className='sidebarList'>
        {SidebarData.map((item, key) => (
          <li className='row' id={window.location.pathname == item.link ? "Active" : ""} key={key} onClick={() => window.location.pathname = item.link}>
            <div id='icon'>{item.icon}</div>
            <div id='title'>{item.title}</div>
            {item.title === "Превозни средства" && WarningBubble ? <div><Alert /></div> : null}
          </li>
        ))}
      </ul>
      <button onClick={logOut} className='LogOutBtn'><LogoutIcon />Изход</button>
    </div>
  )
}

export default Sidebar
