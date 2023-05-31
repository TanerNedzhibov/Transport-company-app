import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import AddCMR from '../Components/AddCMR';
import EditCMR from '../Components/EditCMR';
import { fetchData, fetchTrucks, deleteCmr } from '../Assets/Requests';
import PdfViewer from '../Components/PdfViewer';




const CMRTable = () => {

    const [clicked, setClicked] = useState(true);
    const [cmrData, setCmrData] = useState([]);
    const [trucksData, setTrucksData] = useState();

    useEffect(() => {
        fetchData(setCmrData);
        fetchTrucks(setTrucksData);
        setClicked(false);
    },[clicked]);
    
    const columns = [
        
        {
         name: "cmrNumber",
         label: "CMR №",
         options: {
          filter: false,
          sort: true,
         }
        },
        {
            name: "truckNumber",
            label: "Камион №",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "startDestination",
            label: "Дестинация: Начало",
            options: {
             filter: false,
             sort: false,
            }
        },
        {
            name: "endDestination",
            label: "Дестинация: Край",
            options: {
             filter: false,
             sort: false,
            }
        },
        {
          name: "km",
          label: "Дистанция(км)",
          options: {
           filter: false,
           sort: false,
          }
        },
        {
            name: "date",
            label: "Дата",
            options: {
             filter: false,
             sort: true,
            }
        },
        {
          name: "pdf",
          label: "PDF",
          options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <PdfViewer  cmrData={cmrData}
                            rowIndex={tableMeta.rowIndex}/>
              ); 
            } 
          }
        },
        {
            name: "",
            label: "",
            options: {
              filter: false,
              sort: false,
              empty: true,
              customBodyRender: (value, tableMeta, updateValue) => {
               return(
                  <EditCMR  cmrData={cmrData}
                            trucksData={trucksData}
                            rowIndex={tableMeta.rowIndex}
                            setClicked={setClicked}
                            clicked={clicked}
                            /> 
               )
              } 
            }
          }
       ];

        const data = cmrData.sort((a,b) => b.id-a.id).map((cmr) => (
            [cmr.documentNumber, cmr.truckNumber, cmr.destinationB, cmr.destinationE, cmr.km+" км", cmr.date]
        ))

       const options = {
        filterType: 'checkbox',
        print: false,
        download: false,
        rowsPerPageOptions: [5, 8],
        rowsPerPage: 8,
        textLabels: {
            body: {
              noMatch: "Няма намерени записи!",
            },
            pagination:{
              next: "Следваща страница",
              previous: "Предишна страница",
              rowsPerPage: 'Редове на страница:',
              jumpToPage: 'Прескочи на страница:'
            },
            toolbar: {
                search: 'Търсене',
                viewColumns: 'Преглед на колони',
                filterTable: 'Филтри',
            },
            filter: {
              all: "Всички записи",
              title: "Филтри",
              reset: "Нулиране избори",          
            },
            selectedRows: {
              text: "Избрани",
              delete: "Изтриване на избрани",
              deleteAria: "Изтриване на избрани"
            },
        },
        customToolbar: () => {
            return (
            <span style={{width: "auto", hight: "auto"}}>
              <AddCMR clicked={clicked} setClicked={setClicked} trucksData={trucksData}/>
            </span>
            );
        },
        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.map(e => {
                const deletedUserIndex = cmrData[e.dataIndex]
                deleteCmr(deletedUserIndex.id);
            });
        }, 
    };

  return (
    <MUIDataTable
    title={"CMR списък"}
    data={data}
    columns={columns}
    options={options} />
  )
}

export default CMRTable
{/*<PdfViewer pdfFile={cmrData[rowIndex].pdfFile}/>
<EditCMR documentNumber={cmrData[rowIndex].documentNumber}
                            truckNumber={cmrData[rowIndex].truckNumber}
                            destinationB={cmrData[rowIndex].destinationB}
                            destinationE={cmrData[rowIndex].destinationE}
                            date={cmrData[rowIndex].date}
                            km={cmrData[rowIndex].km}
                            id={cmrData[rowIndex].id}
                            setClicked={setClicked}
                            rowIndex={rowIndex}
                            />*/}