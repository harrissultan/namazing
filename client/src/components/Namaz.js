import { useState, useEffect } from "react";

function Namaz(){
const [allData, setAllData] = useState({});
const [Fajr, setFajr] = useState("");

useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByAddress?address=ny")
    .then((r) => r.json())
    .then((data) => setAllData(data.data?.timings));
    // .then((data) => console.log(data));
}, []);

// function handle(e){
//     e.preventDefault();
//     fetch("/namaz",{
//       method:"POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({

  
//       })
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//   }

return (
    <div >
        <h1 id="main-display">NAMAZ</h1>
        <div id="namaz">
            <label><h1 id="namazlist">Fajr: {allData.Fajr}</h1></label>
            <input className="checkbox" type="checkbox" id="fajrCheck" onChange={console.log(true)} />
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Dhuhr: {allData.Dhuhr}</h1></label>
            <input className="checkbox" type="checkbox" id="dhuhrCheck" onClick="{e.target.value}"/>     
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Asr: {allData.Asr}</h1></label>
            <input className="checkbox" type="checkbox" id="asrCheck" onClick="{e.target.value}"/>
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Maghrib: {allData.Maghrib}</h1></label>
            <input className="checkbox" type="checkbox" id="magribCheck" onClick="{e.target.value}"/>
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Isha: {allData.Isha}</h1></label>
            <input className="checkbox" type="checkbox" id="ishaCheck" onClick="{e.target.value}"/>
        </div>
        
    </div>
);


}
export default Namaz;