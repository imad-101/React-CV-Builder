import LeftForm from "./LeftForm";
import RightDetails from "./RightDetails";
import { useState } from "react";
import html2pdf from "html2pdf.js";

function App() {
  const [details, setDetails] = useState({});
  const [imgUrl, setImgUrl] = useState(null);

  function handleData(event) {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(details);
  }

  function handleImage(event) {
    const file = event.target.files[0];

    file && setImgUrl(URL.createObjectURL(file));
  }

  function download() {
    const element = document.getElementById("Download");
    const options = {
      filename: "MyCv",
      margin: 1,
      image: { type: "jpeg", quality: 0.92 },
    };

    html2pdf(element, options);
  }

  return (
    <div className="flex mx-auto w-4/5 mt-9 bg-sky-100 gap-[5rem] mb-10 p-10 rounded-xl">
      <LeftForm
        handleData={handleData}
        handleImage={handleImage}
        download={download}
      ></LeftForm>
      <RightDetails details={details} imgUrl={imgUrl}></RightDetails>
    </div>
  );
}

export default App;
