import { Link } from "react-router-dom";


function ButtonLink({ link, content }) {
    return (
        <Link to={link} className="button-link">
            {content}
        </Link>
    )
};

export default ButtonLink;