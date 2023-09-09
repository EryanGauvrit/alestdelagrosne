import React from "react";
import { Link } from "react-router-dom";


function ButtonLink({ link, content, borderColor, color, externalNavigation }) {

    const style = {
        borderColor: borderColor,
        boxShadow: `1px 1px 10px ${borderColor}`,
        color: color
    };

    return (
        <React.Fragment>
            {
                !externalNavigation ?
                    <Link to={link} className="button-link" style={style} onClick={"#backTop-anchor"}>
                        {content}
                    </Link>
                    :
                    <a href={link} className="button-link" style={style} target="_blank" rel="noreferrer">{content}</a>
            }
        </React.Fragment>
    )
};

export default ButtonLink;