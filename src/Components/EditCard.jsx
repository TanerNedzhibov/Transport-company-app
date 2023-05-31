import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { editTruck } from '../Assets/Requests';


const EditCard = (props) => {

    var error = true;
    const { id, icon, truckNumber, model, km, maintenance, insurance, insurance2, chekup, tachoGraph } = props.truckData
    const [document, setDocument] = useState({
        icon: icon,
        truckNumber: truckNumber,
        model: model,
        km: km,
        maintenance: maintenance,
        insurance: insurance,
        insurance2: insurance2,
        chekup: chekup,
        tachoGraph: tachoGraph
    });

    const handleClose = () => {
        props.setOpen(false);
        setTimeout(() => { props.setOpenEdit(false) }, 300)
      };

    const onChange = (e) => {
        const { name, value} = e.target

        setDocument({
            ...document,
            [name]:value
        })
    }

    const allFilled = Object.values(document).every(
        value => value
    );

    document.icon && document.truckNumber && document.model && document.km && document.maintenance && document.insurance &&
    document.chekup ? error=false : error=true; 

    const submitHandler = (e) => {
        e.preventDefault();
        props.setClicked(true);
        if(!error){
            editTruck(document,id);
        }
        handleClose();

    }

  return (
    <div>
        <DialogContent sx={{width: "430px", height: "450px"}}>
        <div style={{height: "80px", display: "grid", placeItems: "center", marginBottom: "20px"}}>
        <img src={icon} style={{maxHeight: "80px"}}/>
        </div>
        <form onSubmit={submitHandler}>
            <input type='text' style={{marginBottom: "45px", marginLeft: "100px", fontSize: "23px", maxWidth: "190px", textAlign: "center",fontWeight: "bold"}} className='editCardInput' value={document.truckNumber} name='truckNumber' onChange={onChange}/>  
            <div id='TruckCardText'>
            <div className='TCtext'>Модел: <input type='text' className='editCardInput' value={document.model} name='model' onChange={onChange}/></div>
            <div className='TCtext'>Км: <input type='text' className='editCardInput' value={document.km} name='km' onChange={onChange}/> км</div>
            <div className='TCtext'>Обслужване: <input type='text' className='editCardInput' value={document.maintenance} name='maintenance' onChange={onChange}/> км</div>
            <div className='TCtext'>Застраховка:  <input type='text' className='editCardInput' value={document.insurance} name='insurance' onChange={onChange}/></div>
            <div className='TCtext'>Каско:  <input type='text' className='editCardInput' value={document.insurance2} name='insurance2' onChange={onChange}/></div>
            <div className='TCtext'>Техн. преглед:  <input type='text' className='editCardInput' value={document.chekup} name='chekup' onChange={onChange}/></div>
            <div className='TCtext'>Тахограф преглед: <input type='text' className='editCardInput' value={document.tachoGraph} name='tachoGraph' onChange={onChange}/></div>
            </div>
        </form>
        </DialogContent>
        <DialogActions>
            <Button disabled={error ? true : false} onClick={submitHandler}>
            Запиши
            </Button>
        </DialogActions>
    </div>
  )
}

export default EditCard
