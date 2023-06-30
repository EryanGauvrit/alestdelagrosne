import { Link } from "react-router-dom";


function ButtonLink({ link, content, borderColor, color }) {

    const style = {
        borderColor: borderColor,
        boxShadow: `1px 1px 10px ${borderColor}`,
        color: color
    };

    return (
        <Link to={link} className="button-link" style={style}>
            {content}
        </Link>
    )
};

export default ButtonLink;