

function DetailsPrices({ prices }) {

    const icon = <i className="fa-solid fa-square"></i>;

    return (
        <section className="prices-bloc">

            <table>
                <thead>
                    <tr>
                        <th>Saison</th>
                        <th>2 nuits</th>
                        <th>3 nuits</th>
                        <th>4 nuits</th>
                        <th>5 nuits</th>
                        <th>6 nuits</th>
                        <th>Semaine</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="high">
                        <td>Haute</td>
                        {prices.high.map((item) => (
                            <td key={item}>{item} €</td>
                        ))}
                    </tr>
                    <tr className="average">
                        <td>Moyenne</td>
                        {prices.average.map((item) => (
                            <td key={item}>{item} €</td>
                        ))}
                    </tr>
                    <tr className="low">
                        <td>Basse</td>
                        {prices.low.map((item) => (
                            <td key={item}>{item} €</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <p className="table-quote">* Les tarifs sont calculés pour le logement en lui-même, et non par personne.</p>
            <ul>
                <li>{icon} Haute saison : de juillet à aout</li>
                <li>{icon} Moyenne saison : de septembre à octobre et d'avril à juin</li>
                <li>{icon} Basse saison : de novembre à mars</li>
            </ul>
        </section>
    )
};

export default DetailsPrices;