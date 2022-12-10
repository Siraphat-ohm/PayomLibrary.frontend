import searchLogo from "../assets/search_logo_2.png";
import "../css/searchbar.css";

function SearchBar() {
    return (
        <div className="first_column">
            <div className="input_book_name">
                <div className="flex">
                    <div className="item_1 item">
                        <select name="type" className="type">
                            <option value="1">ชื่อหนังสือ</option>
                            <option value="2">ชื่อผู้แต่ง</option>
                            <option value="3">ประเภทหนังสือ</option>
                        </select>
                    </div>
                    <div className="item_2 item">
                        <div className="box_input">
                            <input className="book_name" type="text" placeholder="ค้นหา"/>
                        </div>
                    </div>
                    <div className="item_3 item">
                        <button className="box_search">
                            <img className="search" src={searchLogo}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;