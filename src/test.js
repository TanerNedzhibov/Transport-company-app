import { ipcMain } from 'electron';

const fs = require('fs');

export const saveFile = () => {
    ipcMain.on("saveData",(sender, data) => {
        console.log(data);
        let sData = JSON.stringify(data);
        fs.writeFileSync("data/data.json", sData);
        console.log("Data Saved");
    })
}

