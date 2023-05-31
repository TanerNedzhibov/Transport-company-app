import { updateTrackInfo } from "../Assets/Requests";

export const TrackDate = (truck) => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth()+1).padStart(2,"0");
    let year = date.getFullYear();
    let currentFullDate = date.getTime();

    
      truck.forEach((trk) => {
        let datesToCheck = {
            insuranceDate: new Date(`${trk.insurance}`),
            insurance2Date: new Date(`${trk.insurance2}`),
            chekupDate: new Date(`${trk.chekup}`),
            tachoGraphDate: new Date(`${trk.tachoGraph}`),
        }
        let obj = {};
        if(datesToCheck.insuranceDate < currentFullDate){
            obj.truckNumber = trk.truckNumber;
            obj.pastDueI = `Изтекла застраховка! ${trk.insurance}`;
           // pastDueArray.push(obj);
        }
        if(datesToCheck.insurance2Date < currentFullDate){
            obj.truckNumber = trk.truckNumber;
            obj.pastDueI2 = `Изтекло каско! ${trk.insurance2}`;
            //pastDueArray.push(obj);
        }
        if(datesToCheck.chekupDate < currentFullDate){
            obj.truckNumber = trk.truckNumber;
            obj.pastDueC = `Изтекъл преглед! ${trk.chekup}`;
            //pastDueArray.push(obj);
        }
        if(datesToCheck.tachoGraphDate < currentFullDate){
            obj.truckNumber = trk.truckNumber;
            obj.pastDueT = `Изтекъл преглед тахограф! ${trk.tachoGraph}`;
            //pastDueArray.push(obj);
        }
        
      });

/*
    let pastDue = truck.filter((trk) => {
        //let insuranceDate = new Date(`${trk.insurance}`);
        let datesToCheck = {
            insuranceDate: new Date(`${trk.insurance}`),
            insurance2Date: new Date(`${trk.insurance2}`),
            chekupDate: new Date(`${trk.chekup}`),
            tachoGraphDate: new Date(`${trk.tachoGraph}`),
        }
        return datesToCheck.insuranceDate < currentFullDate || datesToCheck.insurance2Date < currentFullDate || datesToCheck.chekupDate < currentFullDate || datesToCheck.tachoGraphDate < currentFullDate 
      });
    
    pastDueArray.push(...pastDue);
    
*/
}