import React from "react";
import SlideShow from "../SlideShow";
import ButtonLink from "../ButtonLink";

function HobbiesCard({
    title = "",
    description = "",
    listText = [""],
    iconListText = true,
    listLink = [{ link: "", content: "" }],
    iconListLink = true,
    btnLink = "",
    btnText = "",
    pictures = [""]
}) {

    const listLinkIcon = <i className="fa-solid fa-arrow-up-right-from-square"></i>;
    const icon = <i className="fa-solid fa-check"></i>

    const returnGallerie = (tabImg) => {
        if (tabImg.length === 1) {
            return <img src={tabImg[0]} alt={title} />
        } else {
            return <SlideShow pictures={tabImg} onClick={false} activeDots={false} />
        }
    }

    return (
        <div className="hobbies-bloc-list">
            <h4>{title}</h4>
            {
                description &&
                <p>{description}</p>
            }
            <ul>
                {
                    listText[0] && listText.map((item) =>
                        <li>{iconListText && icon}{item}</li>
                    )
                }
                {
                    listLink[0] && listLink.map((item) =>
                        <li>
                            {iconListLink && listLinkIcon}
                            <a href={item?.link} target="_blank" rel="noreferrer">{item?.content}</a>
                        </li>
                    )
                }
            </ul>
            <React.Fragment>
                {
                    pictures[0] && returnGallerie(pictures)
                }
                {
                    btnLink && btnText &&
                    <ButtonLink link={btnLink} content={btnText} externalNavigation={true} />
                }
            </React.Fragment>
        </div>
    )
};

export default HobbiesCard;