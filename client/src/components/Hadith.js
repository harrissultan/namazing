import { useState, useEffect } from "react";

function Hadith(){
    const [hadithData, setHadithData] = useState();

  useEffect(() => {
    fetch("/api")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((data) => setHadithData(data.hadith));
      }else{alert("error")}
    });
  }, []);



return(
    <div>
        {/* <p>{hadithData[0].body}</p> */}
        {/* <p>{console.log(hadithData[0].body)}</p> */}
        {/* <p>{console.log(hadithData[1].body)}</p> */}
    </div>
);

}
export default Hadith;