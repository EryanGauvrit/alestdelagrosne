

function Mentions() {

    const companyName = "A l'Est de la Grosne";
    const webSiteName = 'www.alestdelagrosne.com';
    const webSiteLink = `https://${webSiteName}`;

    return (
        <main className="mentions">
            <h1>Mentions Légales</h1>
            <p>
                Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
            </p>
            <br />

            <p>
                Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.anthedesign.fr sont :
            </p>
            <section>
                <h2>Éditeur du Site :</h2>
                <ul>
                    <li>{companyName} de SIRET : </li>
                    <li>Responsable éditorial : Pascal Rorgues</li>
                    <li>L'Abergement, 71390 Messey-sur-Grosne</li>
                    <li>Téléphone : 06.15.10.92.25</li>
                    <li>Email : alestdelagrosne@gmail.com</li>
                    <li>Site Web : <a href={webSiteLink}>{webSiteName}</a></li>
                </ul>
            </section>
            <section>
                <h2>Hébergement :</h2>
                <ul>
                    <li>Hébergeur : HOSTINGER, UAB</li>
                    <li>Rue Jonavos 60C, Kaunas 44192 Lituanie</li>
                    <li>Site Web : hostinger.fr</li>
                </ul>
            </section>
            <section>
                <h2>Développement :</h2>
                <ul>
                    <li>Eryan GAUVRIT</li>
                    <li>Adresse : 33 Rue du Pont de Thé, 74940 Annecy</li>
                </ul>
            </section>
            <section>
                <h2>Conditions d’utilisation :</h2>
                <ul>
                    <li>Ce site (<a href={webSiteLink}>{webSiteName}</a>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.</li>
                    <li>Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…</li>
                    <li>{companyName} met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.</li>
                    <li>Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de {companyName} , et signaler toutes modifications du site qu’il jugerait utile. {companyName} n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</li>
                </ul>
            </section>
            <section>
                <h2>Liens hypertextes :</h2>
                <ul>
                    <li>Les sites internet peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. {companyName} ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.</li>
                    <li>{companyName} ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.</li>
                </ul>
            </section>
            <section>
                <h2>Services fournis :</h2>
                <ul>
                    <li>L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site <a href={webSiteLink}>{webSiteName}</a></li>
                    <li>{companyName} s’efforce de fournir sur le site <a href={webSiteLink}>{webSiteName}</a> des informations aussi précises que possible. Les renseignements figurant sur le site <a href={webSiteLink}>{webSiteName}</a> ne sont pas exhaustifs et les photos non contractuelles.</li>
                    <li>Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site <a href={webSiteLink}>{webSiteName}</a> sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.</li>
                </ul>
            </section>
            <section>
                <h2>Données personnelles :</h2>
                <ul>
                    <li>Vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <a href={webSiteLink}>{webSiteName}</a>.</li>
                </ul>
            </section>
        </main >
    )
};

export default Mentions;