import AppBar from "../component/AppBar"
import "../css/searchbar.css";
function UploadPage(){

    return (
        <div>
            <input placeholder="ชื่อหนังสือ"/>
            <input placeholder="title"/>
            <input placeholder="ประเภท"/>
            <input placeholder="วันที่พิมพ์"/>
            <input placeholder="จำนวน"/>
        </div>
    )
}

export default UploadPage;