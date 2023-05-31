import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from "@mui/material/Tooltip";
import { createTruck } from '../Assets/Requests';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DAF from '../Assets/DAF.png'
import Renault from '../Assets/Renault.png'
import VW from '../Assets/VW.png'
import Audi from '../Assets/Audi.png'
import Ford from '../Assets/Ford.png'

const AddCard = ({setClicked}) => {
    var error = true;
    const [open, setOpen] = useState(false);
    const [document, setDocument] = useState({
        icon: "",
        truckNumber: "",
        model: "",
        km: "",
        maintenance: "",
        insurance: "",
        insurance2: "",
        chekup: "",
        tachoGraph: ""
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDocument({...document,
            icon: "",
            truckNumber: "",
            model: "",
            km: "",
            maintenance: "",
            insurance: "",
            insurance2: "",
            chekup: "",
            tachoGraph: ""
        });
    }

    const handleChange = (event) => {
        setDocument({...document, icon: event.target.value});
      };

    const allFilled = Object.values(document).every(
        value => value
    );

    document.icon && document.truckNumber && document.model && document.km && document.maintenance && document.insurance &&
    document.chekup ? error=false : error=true;
        
    const submitHandler = (e) => {
        e.preventDefault();
        setClicked(true);
        if(!error){
            createTruck(document);
        }
        handleClose();
    }
    
    const onChange = (e) => {
        const { name, value} = e.target
        setDocument({
            ...document,
            [name]:value
        })
    }

  return (
    <div>
    <Tooltip sx={{width: "40px", height: "40px"}} title="Добавяне">
            <div id="AddCard" onClick={handleClickOpen}><AddIcon fontSize='large'/></div>
    </Tooltip>
      <Dialog  sx={{ '& .MuiDialog-paper': { 
        width: '80%', 
        height: 'auto', 
        boxShadow: "0px 0px 20px 3px"
    } }} open={open} onClose={handleClose}>
        <DialogTitle>Добавяне на превозно средство</DialogTitle>
        <DialogContent sx={{width: "auto", marginLeft: "5%"}}>
            <form style={{display: 'grid', gridTemplateColumns: "250px 250px"}} onSubmit={submitHandler}>
                <div></div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120,marginLeft: "15px" }}>
                    <InputLabel id="demo-simple-select-standard-label" variant="standard">Марка</InputLabel>
                    <Select sx={{width: "195px"}}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={document.icon}
                    onChange={handleChange}
                    label="Марка"
                    >
                        <MenuItem value="">
                            <em>---</em>
                        </MenuItem>
                        <MenuItem value={DAF}>DAF</MenuItem>
                        <MenuItem value={Renault}>Renault</MenuItem>
                        <MenuItem value={VW}>VW</MenuItem>
                        <MenuItem value={Audi}>Audi</MenuItem>
                        <MenuItem value={Ford}>Ford</MenuItem>
                    </Select>
                </FormControl>
                <div>
                <TextField onChange={onChange} 
                id="truckNumber" name='truckNumber' label="Регистрационен №" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} 
                id="model" name='model' label="Модел" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} 
                id="km" name='km' label="Км" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} 
                id="maintenance" name='maintenance' label="Обслужване" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} type='date'
                id="insurance" name='insurance' helperText="Застраховка" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px", width: "195px"}} />
                </div>
                <div>
                <TextField onChange={onChange} type='date'
                id="insurance2" name='insurance2' helperText="Каско" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px", width: "195px"}} />
                </div>
                <div>
                <TextField onChange={onChange} type='date' 
                id="chekup" name='chekup' helperText="Технически преглед" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px", width: "195px"}} />
                </div>
                <div>
                <TextField onChange={onChange} type='date' 
                id="tachoGraph" name='tachoGraph' helperText="Тахограв преглед" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px", width: "195px"}} />
                </div>
                </form> 
        </DialogContent>
        <span style={{color: "red", fontSize: "12px",marginTop: "20px", marginLeft: "70px",}}>*Всички полета са задължителни!</span>
        <DialogActions>
            <Button onClick={handleClose}>Отказ</Button>
            <Button type='submit' disabled={error ? true : false} onClick={submitHandler}>Добавяне</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddCard
