import ButtonLink from "../ButtonLink";
import imgEvt from "../../assets/pictures/img_event.jpg";

function NextEvent() {
    return (
        <section className="event">
            <h3>Prochaine manifestation : </h3>
            <a href="https://www.chalondanslarue.com/fr/le-festival/edition-2023" target="_blank" rel='noreferrer' className="event-bloc">
                <img src={imgEvt} alt="évenement" />
                <ul className="event-details">
                    <li className="title-list">
                        <i className="fa-solid fa-circle-info"></i>
                        <h4>Chalon dans la rue</h4>
                        <i className="fa-solid fa-circle-info"></i>
                    </li>
                    <li><i className="fa-solid fa-chevron-right"></i>Plus grand Festival des arts de rue de France</li>
                    <li><i className="fa-solid fa-chevron-right"></i>Du 19 au 23 juillet 2023</li>
                    <li><i className="fa-solid fa-chevron-right"></i>71 – Chalon-sur-Saône</li>
                </ul>
            </a>
            <ButtonLink
                link="/hobbies"
                content="voir toutes les activités du coin"
                borderColor='$color-two'
                color='$color-two'
            />
        </section>
    )
};

export default NextEvent;