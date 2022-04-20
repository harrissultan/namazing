import { useState, useEffect } from "react";

function Namaz(){
const [allData, setAllData] = useState({});

useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByAddress?address=ny")
    .then((r) => r.json())
    .then((data) => setAllData(data.data?.timings));
    // .then((data) => console.log(data));
}, []);
return (
    <div >
        <h1 id="main-display">NAMAZ</h1>
        <div >
        <label for="fajr"><h1 id="namazlist">Fajr: {allData.Fajr}</h1></label>
        <input type="checkbox" id="myCheck" onclick="myFunction()"/>
        </div>
        <h1 id="namazlist">Dhuhr: {allData.Dhuhr}</h1>
        <h1 id="namazlist">Asr: {allData.Asr}</h1>
        <h1 id="namazlist">Maghrib: {allData.Maghrib}</h1>
        <h1 id="namazlist">Isha: {allData.Isha}</h1>
    </div>
);


}
export default Namaz;