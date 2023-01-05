import { useEffect, useRef, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import uploadStyles from "../css/upload.module.css"

import Form from 'react-bootstrap/Form';

function UploadPage() {

  return (
    <div >
      <form action="" className={uploadStyles.upload_area}>

      </form>
    </div>
  )
}

export default UploadPage;
