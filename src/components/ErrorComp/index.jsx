import { Link } from "react-router-dom";


function ErrorComp() {
    return (
        <main className="main-error">
            <h1>ERREUR : 404</h1>
            <h2>Dommage ! Cette page est introuvable ...</h2>
            <Link to={'/'} onClick={"#backTop-anchor"}>Retour sur la page d'accueil</Link>
        </main>
    )
};

export default ErrorComp;