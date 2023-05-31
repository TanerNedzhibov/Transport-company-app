import React from 'react'
import DangerousIcon from '@mui/icons-material/Dangerous';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const AlertBar = ({access}) => {
  return (
      <div className='alerBar' id={access ? "Green" : "Red"}>
        <div id='icon'>{access ? <DoneOutlineIcon/> : <DangerousIcon />}</div>
        <div id='text'>{access ? "Добре дошъл!" : "Нямате достъп!"}</div>
      </div>
  )
}

export default AlertBar
