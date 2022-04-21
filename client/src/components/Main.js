import { useState, useEffect } from "react";
import Hadith from "./Hadith";

function Main({ user }) {

  const [prayerData, setPrayerData] = useState({});

  useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByAddress?address=ny")
      .then((r) => r.json())
      .then((data) => setPrayerData(data));
      // .then((data) => console.log(data));
  }, []);



  let v1 = prayerData.data?.timings.Fajr
  let v2 = prayerData.data?.timings.Dhuhr
  let v3 = prayerData.data?.timings.Asr
  let v4 = prayerData.data?.timings.Maghrib
  let v5 = prayerData.data?.timings.Isha
  let today = new Date();
  let time = today.getHours();
  let nextPrayer = 0
  // console.log(hadithData)
  if ((parseInt(v1)>time)){
    nextPrayer = `Fajr at ${v1}`;
  }else if ((parseInt(v2)>time)){
    nextPrayer = `Dhuhr at ${v2}`;
  }else if ((parseInt(v3)>time)){
    nextPrayer =  `Asar at ${v3}`;
  }else if ((parseInt(v4)>time)){
    nextPrayer =  `Maghrib ${v4}`;
  }else if((parseInt(v5)>time)){
    nextPrayer =  `Isha ${v5}`;
  }



  if (user) {
    return(
      <>
      <div id="main">
        <div id="namehead">
          <h1>Welcome, {user.username}!</h1>
        </div>
          <hr/>
        <div id="dis-box">
          <h3>Today's Date: {prayerData.data?.date.gregorian.day}-{prayerData.data?.date.gregorian.month.en}-{prayerData.data?.date.gregorian.year} ---------------- Islamic Date: {prayerData.data?.date.hijri.day}-{prayerData.data?.date.hijri.month.en}-{prayerData.data?.date.hijri.year}</h3>
          <br/>
          <h1>Next Prayer: {nextPrayer}</h1>
        </div>
      </div>
      <br/>
      <div id="namaz">
      <div id="sahoor-box">
        <h1>Sahoor Time</h1>
        <h1>{prayerData.data?.timings.Fajr}</h1>
      </div>
      <div id="iftar-box">
        <h1>Iftar Time</h1>
        <h1>{prayerData.data?.timings.Maghrib}</h1>
      </div>
      </div>
      <br/>
      <div id="dis-box">
        <Hadith/>
      </div>
      </>
  )} else {
    return(
      <div id="namehead">
        <h1>Please Login</h1>
      </div>
      
    )
  };
}

export default Main;