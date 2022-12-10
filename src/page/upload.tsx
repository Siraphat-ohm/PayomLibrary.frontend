import AppBar from "../component/AppBar";
import "../css/searchbar.css";
import "../css/createbook.css";
import { useRef } from "react";

function UploadPage() {
    const fileRef:any = useRef(null);

  return (
    <div>
        <div className="Box_createbook">
          <div className="Box_grid">
            <div className="image box_image">
              <button>
                <input name="upload" type="file" ref={fileRef}/>
              </button>
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
              <p>
                  <label>หมวดหมู่หนังสือ :</label>
                    <input type="checkbox" name="Type_book" value="science" />
                    <label>วิทยาศาสตร์</label>
                    <input type="checkbox" name="Type_book" value="math" />
                    <label>คณิตศาสตร์</label>
                    <input type="checkbox" name="Type_book" value="novel" />
                    <label>นิยาย</label>
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
            </div>
          </div>
          <div>
            <button className="add_button" onClick={() => console.log(fileRef.current.files[0])}>
              <div className="Font"> เพิ่มหนังสือ </div>
            </button>
          </div>
        </div>
    </div>
  );
}

export default UploadPage;
