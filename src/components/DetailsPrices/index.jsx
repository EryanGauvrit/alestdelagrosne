
function DetailsPrices({ initialPrice, capacity }) {

    const icon = <i className="fa-solid fa-square"></i>;

    const midSeasonPrice = Math.floor((initialPrice * 1.15) / 5) * 5;
    const highSeasonPrice = Math.ceil((initialPrice * 1.3) / 15) * 15;    

    function calculatePrice(i, price, season) {
        let finalPrice;
        switch (i) {
            case 1: {
                if(season === 'high') {
                    finalPrice = Math.floor((price * 2) / 1.25 / 10) * 10;
                } else if(season === 'mid') {
                    finalPrice = Math.ceil((price * 2) / 1.25 / 15) * 15;
                } else {
                    finalPrice = Math.floor((price * 2) / 1.15 / 10) * 10;
                }
            }
                break;
            case 2: finalPrice = price;
                break;
            case 3: finalPrice = price * 3;
                break;
            case 4: finalPrice = (price * 7) - 25;
                break;
        }
        return finalPrice;
    }

    const getPrices = (price, season) => {
        const prices = [];
        for (let i = 1; i <= 4; i++) {
            prices.push(calculatePrice(i, price, season));
        }
        return prices;
    }

    return (
        <div className="prices-bloc">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Saison</th>
                            <th>1 nuit (sur demande)</th>
                            <th>À partir de 2 nuits</th>
                            <th>Weekend</th>
                            <th>Semaine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="high">
                            <td>Haute</td>
                            {getPrices(highSeasonPrice, 'high').map((price, index) => <td key={index}>{price} €</td>)}
                        </tr>
                        <tr className="mid">
                            <td>Moyenne</td>
                            {getPrices(midSeasonPrice, 'mid').map((price, index) => <td key={index}>{price} €</td>)}
                        </tr>
                        <tr className="low">
                            <td>Basse</td>
                            {getPrices(initialPrice).map((price, index) => <td key={index}>{price} €</td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="table-quote">* À partir de {capacity} personnes, le tarif est de 15€/nuit/personnes supplémentaires</p>
            <p className="table-quote">** Taxe de séjour et frais de gestion inclus.</p>
            <ul>
                <li>{icon} Haute saison : de juin à août - vacances scolaires Noël / Nouvel An / Jours fériés</li>
                <li>{icon} Moyenne saison : de septembre à octobre et d'avril à juin</li>
                <li>{icon} Basse saison : de novembre à mars</li>
            </ul>
        </div>
    )
};

export default DetailsPrices;