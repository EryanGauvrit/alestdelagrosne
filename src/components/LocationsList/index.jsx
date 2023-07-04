import { Link } from "react-router-dom";
import locationsDatas from "../../datas/LocationsDatas.json";

function LocationsList() {

    return (
        <ul>
            {
                locationsDatas.map((location) =>
                    <li key={location.id}><Link to={'/location/' + location.id} onClick={"#backTop-anchor"}>{location.title}</Link></li>
                )
            }
        </ul>
    )
};

export default LocationsList;