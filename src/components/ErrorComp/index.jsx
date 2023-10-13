import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpinnerLoader from "../SpinnerLoader";

function ErrorComp() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000)
    })

    return (
        <React.Fragment>
            {
                loading ?
                    <main className="main-error loading-page">
                        <SpinnerLoader isLoad={loading} />
                    </main>
                    :
                    <main className="main-error">
                        <h1>ERREUR : 404</h1>
                        <h2>Dommage ! Cette page est introuvable ...</h2>
                        <Link to={'/'} onClick={"#backTop-anchor"}>Retour sur la page d'accueil</Link>
                    </main>
            }
        </React.Fragment>
    )
};

export default ErrorComp;