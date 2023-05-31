import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditCard from './EditCard';
import TruckInfoDialog from './TruckInfoDialog';
import Alert from './Alert';


const TruckCard = (props) => {

  const {id, icon, truckNumber, km, maintenance,insurance, insurance2, chekup, tachoGraph} = props.truckData
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  var warning2;
  var warning = {
    maintenance: false,
    insurance: false,
    insurance2: false,
    chekup: false,
    tachoGraph: false
  }
  
  let datesToCheck = {
    insuranceDate: new Date(`${insurance}`),
    insurance2Date: new Date(`${insurance2}`),
    chekupDate: new Date(`${chekup}`),
    tachoGraphDate: new Date(`${tachoGraph}`),
  }
  
  datesToCheck.insuranceDate < props.currentFullDate || datesToCheck.insurance2Date < props.currentFullDate || 
  datesToCheck.chekupDate < props.currentFullDate || datesToCheck.tachoGraphDate < props.currentFullDate || 
  km>maintenance ? warning2=true : warning2=false
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setOpenEdit(false) }, 300)
  };
  
  const chekPastDue = () => {
    if(km>maintenance){
      warning.maintenance = true;
    }
    if(datesToCheck.insuranceDate < props.currentFullDate){
      warning.insurance = true;
    }
    if(datesToCheck.insurance2Date < props.currentFullDate){
      warning.insurance2 = true;
    }
    if(datesToCheck.chekupDate < props.currentFullDate){
      warning.chekup = true;
    }
    if(datesToCheck.tachoGraphDate < props.currentFullDate){
      warning.tachoGraph = true;
    }
  }

  chekPastDue();
  
  return (
    <div>
      <div id='truckCard' onClick={handleClickOpen}>
      <div style={{height: "80px", display: "grid", placeItems: "center"}}>
        <img src={icon} style={{maxHeight: "50px"}}/>
      </div>
        <div style={{fontSize: "17px", textAlign: "center"}}>{truckNumber}</div>
        <div style={{position: "relative", left: "120px", top: "-110px",opacity: warning2 ? "1" : "0"}}><Alert /></div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ '& .MuiDialog-paper': { 
          boxShadow: "0px 0px 20px 3px",
          borderRadius: "5px"
      } }}
      >
        {openEdit ? 
          <EditCard 
          truckData={props.truckData}
          setClicked={props.setClicked}
          setOpen={setOpen}
          setOpenEdit={setOpenEdit}/> 
                        :
          <TruckInfoDialog 
          warning={warning}
          truckData={props.truckData}
          setClicked={props.setClicked}
          setOpen={setOpen}
          setOpenEdit={setOpenEdit} />}
      </Dialog>
    </div>
  )
}

export default TruckCard


/*
<EditCard 
          id={id} 
          icon={icon} 
          truckNumber={truckNumber} 
          model={model}
          km={km}
          maintenance={maintenance}
          insurance={insurance}
          insurance2={insurance2}
          chekup={chekup}
          tachoGraph={tachoGraph}
          setClicked={setClicked}
          setOpen={setOpen}/>

          */