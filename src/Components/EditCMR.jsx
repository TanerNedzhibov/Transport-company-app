import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { editCmr, updateKm, fetchTrucks } from '../Assets/Requests';

const EditCMR = (props) => {
    var error = true;
    const [open, setOpen] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [trkId, setTrkId] = useState({
        selector1: "",
        selector2: ""
    });
    const [document, setDocument] = useState({
        documentNumber: "",
        truckNumber: "",
        destinationB: "",
        destinationE: "",
        date: "",
        km: "",
    });

    /*
    const [trucksData, setTrucksData] = useState();

    useEffect(() => {
        fetchTrucks(setTrucksData);
    },[props.clicked]);
    */

    const handleClickOpen = () => {
        setOpen(true);
        var selectorId1 = props.trucksData.map((trk) => trk.truckNumber).indexOf(props.cmrData[props.rowIndex].truckNumber);
        var selectorId2 = selectorId1 +1 ;
        console.log(selectorId2);
        setTrkId({...trkId, selector1: selectorId1, selector2: selectorId2});
        setDocument({...document,
            documentNumber: props.cmrData[props.rowIndex].documentNumber,
            truckNumber: props.cmrData[props.rowIndex].truckNumber,
            destinationB: props.cmrData[props.rowIndex].destinationB,
            destinationE: props.cmrData[props.rowIndex].destinationE,
            date: props.cmrData[props.rowIndex].date,
            km: props.cmrData[props.rowIndex].km,
        });
        setPdfFile(props.cmrData[props.rowIndex].pdfFile);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const allFilled = Object.values(document).every(
        value => value
    );

    allFilled && pdfFile ? error=false : error=true;
        
    const submitHandler = (e) => {
        e.preventDefault();
        var trkConstKm = Number(props.trucksData[trkId.selector1].km);
        var prevKm = Number(props.cmrData[props.rowIndex].km);
        var newKm = Number(document.km);
        var difference = newKm > prevKm ? newKm-prevKm : prevKm-newKm
        var result = newKm > prevKm ? trkConstKm+difference : trkConstKm-difference
        props.setClicked(true);
        if(!error){
            editCmr(document, props.cmrData[props.rowIndex].id, pdfFile);
            updateKm(`${result}`,trkId.selector2);
        }
        handleClose();
    }
    
    const handleTruckChange = (event) => {
        setDocument({...document, id: event.target.value});
      };

    const onChange = (e) => {
        const { name, value} = e.target

        setDocument({
            ...document,
            [name]:value
        })
    }

    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = handleFileRead;
        reader.readAsDataURL(file);
      }

      function handleFileRead(event) {
        const content = event.target.result;
        setPdfFile(content);
      }

  return (
    <span>
    <Tooltip sx={{width: "40px", height: "40px"}} title="Редактиране">
        <IconButton onClick={handleClickOpen} aria-label="s/hpassword" size="small">
            <EditIcon/>
        </IconButton>
    </Tooltip>
      <Dialog  sx={{ '& .MuiDialog-paper': { 
        width: '80%', 
        height: 'auto', 
        boxShadow: "0px 0px 20px 3px"
    } }} open={open} onClose={handleClose}>
        <DialogTitle>Редактиране на CMR</DialogTitle>
        <DialogContent sx={{width: "auto", marginLeft: "5%"}}>
            <form style={{display: 'grid', gridTemplateColumns: "250px 250px"}} onSubmit={submitHandler}>
                <div></div>
                <div>
                <TextField onChange={onChange} value={document.documentNumber}
                id="cmrNumber" name='documentNumber' label="CMR №" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} value={document.destinationB}
                id="destinationB" name='destinationB' label="Дестинация: Начало" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120,marginLeft: "15px" }}>
                    <InputLabel id="demo-simple-select-standard-label" variant="standard">Камион</InputLabel>
                    <Select sx={{width: "195px"}}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleTruckChange}
                    label="TruckN"
                    defaultValue=""
                    >
                        {props.trucksData && props.trucksData.map(trk => (
                            <MenuItem key={trk.id} value={trk.id}>{trk.truckNumber}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div>
                <TextField onChange={onChange} value={document.destinationE}
                id="destinationЕ" name='destinationE' label="Дестинация: Край" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} value={document.date}
                id="date" name='date' label="Дата" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} value={document.km}
                id="km" name='km' label="Км" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={handleFileSelect} type='file' 
                id="pdf" name='pdfFile' label="PDF" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                </form> 
        </DialogContent>
        <span style={{color: "red", fontSize: "12px",marginTop: "20px", marginLeft: "70px",}}>*Всички полета са задължителни!</span>
        <DialogActions>
            <Button onClick={handleClose}>Отказ</Button>
            <Button type='submit' disabled={error ? true : false} onClick={submitHandler}>Запиши</Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default EditCMR
