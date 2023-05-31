import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const PdfViewer = ({cmrData, rowIndex}) => {

    const [open, setOpen] = useState(false);
    const [pdf, setPdf] = useState();
    const handleClickOpen = () => {
        setOpen(true);
        setPdf(cmrData[rowIndex].pdfFile);
        //pdfFile && setPdf(pdfFile.pdfFile)
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
     <span>
     <Tooltip sx={{width: "40px", height: "40px"}} title="Отваряне">
     <IconButton onClick={handleClickOpen} aria-label="s/hpassword" size="small">
         <PictureAsPdfIcon fontSize='large' />
     </IconButton>
 </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ '& .MuiDialog-paper': { 
            width: '100%', 
            height: '100%', 
            boxShadow: "0px 0px 20px 3px"
            }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {`Преглед на PDF: ${pdf}`}
        </DialogTitle>
        <DialogContent >
        <iframe style={{width: "100%", height: "95%",border: "none"}} src={`../PDF/${pdf}`}></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Затвори</Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default PdfViewer
