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
    <form onSubmit={onSubmit}>
      <div className="Box_createbook">
        <div className="Box_grid">
          <div className="image box_image">
            {imagesURLs.map((imageSrc:string, idx:number) => (
              <img key={idx} src={imageSrc} className='Book_surface'/>
            ))}
          </div>
          <div className="book_detail">
            <p>
              <label>ชื่อหนังสือ :</label>
              <input type="text" name="Book_name" placeholder="ชื่อหนังสือ" />
            </p>
            <p>
              <label>ชื่อผู้แต่งหนังสือ :</label>
              <input
                type="text"
                name="Book_creator"
                placeholder="ชื่อผู้แต่ง"
              />
            </p>
            <p>
              <label>จำนวนครั้งที่พิมพ์ :</label>
              <input
                type="text"
                name="Book_numCreate"
                placeholder="จำนวนครั้งที่พิมพ์"
              />
            </p>
            <p>
              <label>ปีที่พิมพ์ :</label>
              <input type="text" name="Book_year" placeholder="ปีที่พิมพ์" />
            </p>
          </div>
          <div className="book_story">
            <p>
              <label>เนื้อหาโดยย่อ :</label>
            </p>
            <p>
              <textarea
                name="Book_detail"
                rows={4}
                cols={180}
                placeholder="เนื้อหา"
              />
            </p>
            <p>
              <input type="file" onChange={onImageChange}></input>
            </p>
          </div>
        </div>
        <div>
          <button className="add_button" type="submit">
            <div className="Font"> เพิ่มหนังสือ </div>
          </button>
        </div>
      </div>
    </form>
  );
}

export default UploadPage;
