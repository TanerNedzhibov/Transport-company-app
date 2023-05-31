import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { fetchTrucks, updateKm, createCmr } from '../Assets/Requests';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PdfViewer from './PdfViewer';



const AddCMR = ({ clicked, setClicked, trucksData }) => {
    var error = true;
    const [open, setOpen] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [document, setDocument] = useState({
        documentNumber: "",
        destinationB: "",
        destinationE: "",
        date: "",
        km: "",
        id: ""
    });
    //const [trucksData, setTrucksData] = useState();

    /*
    useEffect(() => {
        fetchTrucks(setTrucksData);
    },[clicked]);
    */

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDocument({...document,
            documentNumber: "",
            destinationB: "",
            destinationE: "",
            date: "",
            km: "",
            id: "",
        });
        setPdfFile(null);
    }

    const allFilled = Object.values(document).every(
        value => value
    );

    allFilled && pdfFile ? error=false : error=true;

    const submitHandler = (e) => {
        e.preventDefault();
        setClicked(true);
        if(!error){
            let sumKm = Number(trucksData[document.id -1].km) + Number(document.km);
            let trkNumberAndId = trucksData[document.id -1];
            createCmr(document, trkNumberAndId.truckNumber, pdfFile);
            updateKm(sumKm,trkNumberAndId.id);
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
    
    //pdfFile &&  console.log(pdfFile)
  return (
    <span>
    <Tooltip sx={{width: "40px", height: "40px"}} title="Добавяне">
        <IconButton onClick={handleClickOpen} aria-label="s/hpassword" size="small">
            <PostAddIcon/>
        </IconButton>
    </Tooltip>
      <Dialog  sx={{ '& .MuiDialog-paper': { 
        width: '80%', 
        height: 'auto', 
        boxShadow: "0px 0px 20px 3px"
    } }} open={open} onClose={handleClose}>
        <DialogTitle>Добавяне на CMR</DialogTitle>
        <DialogContent sx={{width: "auto", marginLeft: "5%"}}>
            <form style={{display: 'grid', gridTemplateColumns: "250px 250px"}} onSubmit={submitHandler}>
                <div></div>
                <div>
                <TextField onChange={onChange} 
                id="cmrNumber" name='documentNumber' label="CMR №" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} 
                id="destinationB" name='destinationB' label="Дестинация: Начало" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120,marginLeft: "15px" }}>
                    <InputLabel id="demo-simple-select-standard-label" variant="standard">Камион</InputLabel>
                    <Select sx={{width: "195px"}}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={document.icon}
                    onChange={handleTruckChange}
                    label="TruckN"
                    defaultValue = ""
                    >
                        {trucksData && trucksData.map(trk => (
                            <MenuItem key={trk.id} value={trk.id}>{trk.truckNumber}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div>
                <TextField onChange={onChange} 
                id="destinationЕ" name='destinationE' label="Дестинация: Край" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange}
                id="date" name='date' label="Дата" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={onChange} 
                id="km" name='km' label="Км" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                <div>
                <TextField onChange={(event) => setPdfFile(event.target.files[0].name)} type='file' webkitdirectory="true" 
                id="pdf" name='pdfFile' label="PDF" variant="standard" sx={{marginBottom: "15px", marginLeft: "15px"}} />
                </div>
                </form> 
        </DialogContent>
        <span style={{color: "red", fontSize: "12px",marginTop: "20px", marginLeft: "70px",}}>*Всички полета са задължителни!</span>
        <DialogActions>
            <Button onClick={handleClose}>Отказ</Button>
            <Button type='submit' disabled={error ? true : false} onClick={submitHandler}>Добавяне</Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default AddCMR
