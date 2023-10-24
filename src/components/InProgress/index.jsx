import { Link } from "react-router-dom";
import ModifHead from "../ModifHead";


function InProgress({ needHomeLink }) {
    return (
        <main className="inProgress">
            <ModifHead
                titlePage='Page en cours de développement'
                description=''
                robots='noindex, nofollow'
            />
            <section>
                <h1>A l'Est de la Grosne</h1>
                <article>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <h2>En cours de développement !</h2>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </article>
                <aside>
                    <i className="fa-solid fa-person-running"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--1"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--2"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--3"></i>
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--1"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--2"></i>
                    <i className="fa-solid fa-circle iconCharge iconCharge--3"></i>
                    <i className="fa-solid fa-laptop-code"></i>
                </aside>
                <h2>Revenez plus tard</h2>
                {
                    needHomeLink && <p><Link to={'/'} onClick={"#backTop-anchor"}>Retour à l'accueil</Link></p>
                }

            </section>

        </main>
    )
};

export default InProgress;