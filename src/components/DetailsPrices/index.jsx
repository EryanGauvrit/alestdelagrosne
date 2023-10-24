
function DetailsPrices({ price, capacity }) {

    const icon = <i className="fa-solid fa-square"></i>;

    const initialPrice = price;
    const midSeasonPrice = price * 1.11;
    const highSeasonPrice = price * 1.4;

    function calculatePrices(price) {
        let pricesTab = []

        for (let i = 2; i <= 7; i++) {
            let calculPrice = ((price * i) / calculateReduce(i)).toFixed(0);
            let finalPrice = Math.ceil(calculPrice / 10) * 10;
            pricesTab.push(<td key={`${price * i}-${i}`}>{finalPrice} €</td>)
        }
        return pricesTab;
    }

    function calculateReduce(i) {
        let reduce;
        switch (i) {
            case 2: reduce = 1.00;
                break;
            case 3: reduce = 1.02;
                break;
            case 4: reduce = 1.025;
                break;
            case 5: reduce = 1.03;
                break;
            case 6: reduce = 1.035;
                break;
            default: reduce = 1.04;
        }
        return reduce;
    }

    return (
        <div className="prices-bloc">
            <div className="table-container">
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
                            {calculatePrices(highSeasonPrice)}
                        </tr>
                        <tr className="average">
                            <td>Moyenne</td>
                            {calculatePrices(midSeasonPrice)}
                        </tr>
                        <tr className="low">
                            <td>Basse</td>
                            {calculatePrices(initialPrice)}
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="table-quote">* Le gîte est loué pour une capacité de base de {capacity} personnes.</p>
            <p className="table-quote">** Pour toute personne supplémentaire : 15€/nuits</p>
            <p className="table-quote">*** Taxe de séjour incluse.</p>
            <ul>
                <li>{icon} Haute saison : de juillet à aout - vacances scolaires Noël / Nouvel An</li>
                <li>{icon} Moyenne saison : de septembre à octobre et d'avril à juin</li>
                <li>{icon} Basse saison : de novembre à mars</li>
            </ul>
        </div>
    )
};

export default DetailsPrices;