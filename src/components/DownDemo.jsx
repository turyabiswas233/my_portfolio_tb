import React, { useEffect, useState } from "react";
import axios from "axios";
function DownDemo() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  const baseurl = "https://drive.google.com/";

  const resume = "file/d/1Yel41BpF58UN6ICybVE9dJkNVeWMaLec/view";

  async function btnDownload() {
    await axios.get(`${baseurl}${resume}`).then((response) => {
      setPokemon(response.data);

      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        // alink.click();
        console.log(response.data);
      });

      console.log(response.data);
      setLoading(false);
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
        backgroundColor: "grey",
      }}
    >
      <a
        onClick={btnDownload}
        className="p-3 bg-sky-500 rounded-md cursor-pointer hover:-translate-y-1 transition-transform"
      >
        download
      </a>
    </div>
  );
}

export default DownDemo;
