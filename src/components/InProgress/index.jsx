import { Link } from "react-router-dom";


function InProgress() {
    return (
        <main className="inProgress">
            <section>
                <article>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <h1>En cours développement !</h1>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </article>
                <aside>
                    <i class="fa-solid fa-person-running"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--1"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--2"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--3"></i>
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--1"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--2"></i>
                    <i class="fa-solid fa-circle iconCharge iconCharge--3"></i>
                    <i class="fa-solid fa-laptop-code"></i>
                </aside>
                <h2>Revenez plus tard</h2>
                <p><Link to={'/'}>Retour à l'accueil</Link></p>
            </section>

        </main>
    )
};

export default InProgress;