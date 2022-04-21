import { useState, useEffect } from "react";

function Hadith(){
    const [hadithData, setHadithData] = useState();

  useEffect(() => {
    fetch("/api")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((data) => setHadithData(data));
      }else{alert("error")}
    });
  }, []);



return(
    <div>
        <p>{hadithData?.hadith[1].body}</p>
        <br/>
        <p>{hadithData?.hadith[0].body}</p>
    </div>
);

}
export default Hadith;