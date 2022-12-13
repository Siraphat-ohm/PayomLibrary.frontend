import "../css/searchbar.css";
import "../css/createbook.css";
import { useEffect, useRef, useState } from "react";
import instanceAxios from "../../config/baseAxios";

function UploadPage() {
  const [file, setFile] = useState();
  const [images, setImages]: any = useState([]);
  const [imagesURLs, setImageURLs]:any = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls:any = [];
    images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onSubmit(event: any) {
    event?.preventDefault();
  }

  function onImageChange(e:any){
    setImages([...e.target.files])
  }

  return (
    <div></div>
  );
}

export default UploadPage;
