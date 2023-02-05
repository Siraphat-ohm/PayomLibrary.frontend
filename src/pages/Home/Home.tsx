import { CardBook } from "./CardBook"
import "./Home.css"

export const Home = () => {
    return (
        <div className="container">
            <CardBook data={{id:1, ISBN:"9780714829845", quantity:1, title:"THE BOOK OF ART"}}/>
        </div>
    )
}