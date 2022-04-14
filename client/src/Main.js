import { useState, useEffect } from "react";

function Main() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByAddress?address=ny")
      .then((r) => r.json())
      .then((data) => setAllData(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div>
        <h1 id="namazlist">Fajr: {allData.data?.timings.Fajr}</h1>
        <h1 id="namazlist">Dhuhr: {allData.data?.timings.Dhuhr}</h1>
        <h1 id="namazlist">Asar: {allData.data?.timings.Asr}</h1>
        <h1 id="namazlist">Maghrib: {allData.data?.timings.Maghrib}</h1>
        <h1 id="namazlist">Isha: {allData.data?.timings.Isha}</h1>
      {/* <h1>{console.log(allData)}</h1> */}
    </div>
  );
}

export default Main;