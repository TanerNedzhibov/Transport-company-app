import React from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { deleteTruck } from '../Assets/Requests';
import { reverseString } from '../Assets/Requests';
import Alert from './Alert';

const TruckInfoDialog = (props) => {

    const { id, icon, truckNumber, model, km, maintenance, insurance, insurance2, chekup, tachoGraph } = props.truckData
    const handleDelete = () => {
        deleteTruck(id);
        props.setClicked(true);
        props.setOpen(false);
      } 

  return (
    <div>
        <DialogContent sx={{width: "430px", height: "450px"}}>
          <div style={{height: "80px", display: "grid", placeItems: "center", marginBottom: "20px"}}>
          <img src={icon} style={{maxHeight: "80px"}}/>
          </div>
          <div style={{fontSize: "23px", fontWeight: "bold", marginBottom: "60px", textAlign: "center"}}>{truckNumber}</div>
          <div id='TruckCardText'>
            <div className='TCtext'>Модел:  {model}</div>
            <div className='TCtext'>Км: {km} км</div>
            <div className='TCtext'>Обслужване: {maintenance} км 
              <div className='warningTC' style={{left: "75px"}}>{props.warning.maintenance? <Alert /> : null}</div></div>
            <div className='TCtext'>Застраховка:  {reverseString(insurance)}
              <div className='warningTC' style={{left: "70px"}}>{props.warning.insurance? <Alert /> : null}</div></div>
            <div className='TCtext'>Каско:  {reverseString(insurance2)}
              <div className='warningTC' style={{left: "123px"}}>{props.warning.insurance2? <Alert /> : null}</div></div>
            <div className='TCtext'>Техн. преглед:  {reverseString(chekup)}
              <div className='warningTC' style={{left: "51px"}}>{props.warning.chekup? <Alert /> : null}</div></div>
            <div className='TCtext'>Тахограф преглед: {reverseString(tachoGraph)}
              <div className='warningTC' style={{left: "17px"}}>{props.warning.tachoGraph? <Alert /> : null}</div></div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Изтриване</Button>
          <Button onClick={() => props.setOpenEdit(true)}>
            Редактиране
          </Button>
        </DialogActions>
        </div>
  )
}

export default TruckInfoDialog
