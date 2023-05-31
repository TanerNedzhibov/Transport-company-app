import React, { useEffect, useState } from 'react'
import TruckCard from '../Components/TruckCard'
import AddCard from '../Components/AddCard'
import { fetchTrucks } from '../Assets/Requests'




const Trucks = () => {
  
  const [clicked, setClicked] = useState(true);
  const [trucksData, setTrucksData] = useState([]);

    let date = new Date();
    let currentFullDate = date.getTime();
  
  useEffect(() => {
      fetchTrucks(setTrucksData);
      setClicked(false);
  },[clicked]);

  const trucksData2 = [
    {
      "icon": "/static/media/DAF.b6028cbe694a65981895.png",
      "truckNumber": "T1212TH",
      "model": "EURO 6",
      "km": "200500",
      "maintenance": "300000",
      "insurance": "2023-04-12",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 1
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T2222AM",
      "model": "EURO 6",
      "km": 600190,
      "maintenance": "700000",
      "insurance": "2023-05-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 2
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T3030KK",
      "model": "EURO 6",
      "km": "200000",
      "maintenance": "500000",
      "insurance": "2024-04-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 3
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 5
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 6
    },
    {
      "icon": "/static/media/DAF.b6028cbe694a65981895.png",
      "truckNumber": "T1212TH",
      "model": "EURO 6",
      "km": "200500",
      "maintenance": "300000",
      "insurance": "2023-04-12",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 7
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T2222AM",
      "model": "EURO 6",
      "km": 600190,
      "maintenance": "700000",
      "insurance": "2023-05-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 8
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T3030KK",
      "model": "EURO 6",
      "km": "200000",
      "maintenance": "500000",
      "insurance": "2024-04-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 9
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 10
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 11
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T3030KK",
      "model": "EURO 6",
      "km": "200000",
      "maintenance": "500000",
      "insurance": "2024-04-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 12
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 13
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 14
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 15
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 16
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 17
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T3030KK",
      "model": "EURO 6",
      "km": "200000",
      "maintenance": "500000",
      "insurance": "2024-04-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 18
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 19
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 20
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 21
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 22
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 23
    },
    {
      "icon": "/static/media/Renault.938192cf8aecf44d994d.png",
      "truckNumber": "T3030KK",
      "model": "EURO 6",
      "km": "200000",
      "maintenance": "500000",
      "insurance": "2024-04-11",
      "insurance2": "2023-05-11",
      "chekup": "2023-05-11",
      "tachoGraph": "2023-05-11",
      "id": 24
    },
    {
      "icon": "/static/media/Audi.e257c89109d860579681.png",
      "truckNumber": "T5050KK",
      "model": "A3",
      "km": "50610",
      "maintenance": "51560165",
      "insurance": "2023-04-11",
      "insurance2": "2023-05-08",
      "chekup": "2023-05-10",
      "tachoGraph": "2023-05-17",
      "id": 25
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 26
    },
    {
      "icon": "/static/media/Ford.46b632d721c8a0d8ed7f.png",
      "truckNumber": "T2112AM",
      "model": "F150",
      "km": "50000",
      "maintenance": "60000",
      "insurance": "2023-05-25",
      "insurance2": "",
      "chekup": "2023-05-25",
      "tachoGraph": "",
      "id": 27
    }

  ]
 
  return (
    <div id='trucksPageContainer'>
      <div id='titleT'>Превозни средства</div>
      <div id='trucksContainer'>
        <div id='trucksCardContainer'>
          <AddCard setClicked={setClicked}/>
          {trucksData.map(truck => (
            <TruckCard key={truck.id}
            truckData={truck}
            currentFullDate={currentFullDate}
            setClicked={setClicked}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trucks

/*
 <TruckCard icon={DAF} plate="T4040TH" model="EURO 6" km="300 000" maint="400 000"/>
          <TruckCard icon={Renault} plate="T5040TH" model="EURO 6" km="400 000" maint="500 000"/>
          <TruckCard icon={DAF} plate="T3030TH" model="EURO 6" km="100000" maint="200 000"/>
          <TruckCard icon={VW} plate="В3030TH" model="EURO 6" km="100000" maint="200 000"/>
          */

/*
id={truck.id} 
            icon={truck.icon} 
            truckNumber={truck.truckNumber} 
            model={truck.model}
            km={truck.km}
            maintenance={truck.maintenance}
            insurance={truck.insurance}
            insurance2={truck.insurance2}
            chekup={truck.chekup}
            tachoGraph={truck.tachoGraph}
            setClicked={setClicked}

            */