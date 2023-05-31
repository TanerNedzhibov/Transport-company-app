import axios from "axios"


export const fetchData = (setCmrData) => {
    axios.get('http://localhost:3005/CMR')
    .then(res => {
        setCmrData(res.data)
    })
    .catch(err => {
        console.log(err);
    })
}

export const fetchTrucks = (setTrucksData) => {
    axios.get('http://localhost:3005/Trucks')
    .then(res => {
        setTrucksData(res.data)
    })
    .catch(err => {
        console.log(err);
    })
}

export const createCmr = (document, truckNumber, pdfFile) => {
    axios.post('http://localhost:3005/CMR', {
        documentNumber: document.documentNumber,
        truckNumber: truckNumber,
        destinationB: document.destinationB,
        destinationE: document.destinationE,
        date: document.date,    
        km: document.km,
        pdfFile: pdfFile
    })
}

export const createTruck = (document) => {
    axios.post('http://localhost:3005/Trucks', {
        icon: document.icon,
        truckNumber: document.truckNumber,
        model: document.model,
        km: document.km,
        maintenance: document.maintenance,
        insurance: document.insurance,
        insurance2: document.insurance2,
        chekup: document.chekup,
        tachoGraph: document.tachoGraph
    })
}

export const editCmr = (document, id, pdfFile) => {
    axios.put(`http://localhost:3005/CMR/${id}`, {
        documentNumber: document.documentNumber,
        truckNumber: document.truckNumber,
        destinationB: document.destinationB,
        destinationE: document.destinationE,
        date: document.date,
        km: document.km,
        pdfFile: pdfFile
    })
}

export const editTruck = (document, id) => {
    axios.put(`http://localhost:3005/Trucks/${id}`, {
        icon: document.icon,
        truckNumber: document.truckNumber,
        model: document.model,
        km: document.km,
        maintenance: document.maintenance,
        insurance: document.insurance,
        insurance2: document.insurance2,
        chekup: document.chekup,
        tachoGraph: document.tachoGraph
    })
}

export const updateKm = (km, id) => {
    axios.patch(`http://localhost:3005/Trucks/${id}`, {
        km: km
    })
}

export const updateTrackInfo = (document, id) => {
    axios.patch(`http://localhost:3005/Trucks/${id}`, {
        maintenance: document.maintenance,
        insurance: document.insurance,
        insurance2: document.insurance2,
        chekup: document.chekup,
        tachoGraph: document.tachoGraph
    })
}

export const addTruckKm = (document, km, id) => {
    axios.put(`http://localhost:3005/Trucks/${id}`, {
        icon: document.icon,
        truckNumber: document.truckNumber,
        model: document.model,
        km: km,
        maintenance: document.maintenance,
        insurance: document.insurance,
        insurance2: document.insurance2,
        chekup: document.chekup,
        tachoGraph: document.tachoGraph
    })
}

export const deleteCmr = (id) => {
    axios.delete(`http://localhost:3005/CMR/${id}`)
}

export const deleteTruck = (id) => {
    axios.delete(`http://localhost:3005/Trucks/${id}`)
}

export const reverseString = (str) => {
    let splitStr = str.split("-");
    let reverseArray = splitStr.reverse();
    let joinArray =  reverseArray.join("-");

    return joinArray;
  }
/*
export const sendEmail = () => {
    

    emailjs.sendForm('service_no9678c', 'template_e3km8hi', {message: "Blabla"}, 'pSypR_nrFMIak3sI5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  */
