
function DetailsPrices({ price, capacity }) {

    const icon = <i className="fa-solid fa-square"></i>;

    const initialPrice = price;
    const midSeasonPrice = Math.floor((price * 1.15) / 5) * 5;
    const highSeasonPrice = Math.ceil((price * 1.3) / 15) * 15;    

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
            case 2: finalPrice = price * 3;
                break;
            case 3: finalPrice = price * 2;
                break;
            case 4: finalPrice = price * 3;
                break;
            case 5: finalPrice = price * 4;
                break;
            case 6: finalPrice = price * 5;
                break;
            case 7: finalPrice = price * 6;
                break;
            default: {
                if(season === 'mid') {
                    finalPrice = Math.ceil((price * 7) / 1.025 / 10) * 10;
                } else {
                    finalPrice = Math.floor((price * 7) / 1.025 / 10) * 10;
                }
            }
        }
        return finalPrice;
    }

    const getPrices = (price, season) => {
        const prices = [];
        for (let i = 1; i <= 8; i++) {
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
                            <th>1 nuit</th>
                            <th>Weekend</th>
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
            <p className="table-quote">* Au-delà de {capacity} personnes. Le tarif est de 15€/nuit/personnes supplémentaires</p>
            <p className="table-quote">** Taxe de séjour et frais de gestion inclus.</p>
            <ul>
                <li>{icon} Haute saison : de juillet à aout - vacances scolaires Noël / Nouvel An</li>
                <li>{icon} Moyenne saison : de septembre à octobre et d'avril à juin</li>
                <li>{icon} Basse saison : de novembre à mars</li>
            </ul>
        </div>
    )
};

export default DetailsPrices;