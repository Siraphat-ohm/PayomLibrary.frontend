import "../css/searchbar.css";
import { useEffect, useRef, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import { FileUploader } from "react-drag-drop-files";

function UploadPage() {

  const fileTypes:Array<string> = ['JPG', "PNG"];
  const [file, setFile]:any = useState(null);

  function onSubmit(event: any) {
    event?.preventDefault();
  }

  const handleChange = (file:any) => {
    setFile(file)
  }

  return (
    <div>
      <div className="preview-box">

      </div>
      <FileUploader handleChange={handleChange} name='file' types={fileTypes}/>
    </div>
  );
}

export default UploadPage;
