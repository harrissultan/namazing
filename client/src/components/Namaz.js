import { useState, useEffect } from "react";

function Namaz({user}){
    console.log(user.id)
const [allData, setAllData] = useState({});
const [fajr, setFajr] = useState(false);
const [dhuhr, setDhuhr] = useState(false);
const [asr, setAsr] = useState(false);
const [maghrib, setMaghrib] = useState(false);
const [isha, setIsha] = useState(false);

useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByAddress?address=ny")
    .then((r) => r.json())
    .then((data) => setAllData(data.data?.timings));
    // .then((data) => console.log(data));
}, []);

function handle(e){
    e.preventDefault();
    fetch("/namaz",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fajr: fajr,
        dhuhr: dhuhr,
        asr: asr,
        maghrib: maghrib,
        isha: isha,
        user_id: user.id
      }),
    })
    // .then((r) => {
    //     if (r.ok) {
    //       r.json().then((data) => console.log(data));
    //     }else{alert("what")}
    //   });
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

return (
    <div >
        <h1 id="main-display">NAMAZ</h1>
        <form onSubmit={handle}>
        <div id="namaz">
            <label><h1 id="namazlist">Fajr: {allData.Fajr}</h1></label>
            <input className="checkbox" type="checkbox" id="fajrCheck" onClick={e => setFajr(e.target.checked)}/>
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Dhuhr: {allData.Dhuhr}</h1></label>
            <input className="checkbox" type="checkbox" id="dhuhrCheck" onClick={e => setDhuhr(e.target.checked)}/>     
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Asr: {allData.Asr}</h1></label>
            <input className="checkbox" type="checkbox" id="asrCheck" onClick={e => setAsr(e.target.checked)}/>
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Maghrib: {allData.Maghrib}</h1></label>
            <input className="checkbox" type="checkbox" id="magribCheck" onClick={e => setMaghrib(e.target.checked)}/>
        </div>
        <div id="namaz">
            <label><h1 id="namazlist">Isha: {allData.Isha}</h1></label>
            <input className="checkbox" type="checkbox" id="ishaCheck" onClick={e => setIsha(e.target.checked)}/>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
);


}
export default Namaz;