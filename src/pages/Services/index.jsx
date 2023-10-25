import ModifHead from "../../components/ModifHead";
import ServiceCards from "../../components/ServiceCards";
import he from "he";

function Services({ servicesDatas }) {

    return (
        <main className="services">
            <ModifHead
                titlePage='Nos préstations'
                description="En plus de votre séjour en location dans les campagnes de Bourgogne, nous proposons quelques produits locaux et location de vélos à prix abordable."
                robots='noindex, nofollow'
            />
            <h1>Nos Préstations</h1>
            {
                (servicesDatas[0]) ?

                    servicesDatas.map((service) =>
                        <section key={service.id}>
                            <h2>{he.decode(service.title)}</h2>
                            <div className="cards-bloc">
                                {
                                    service.cards.map((card) =>
                                        <ServiceCards card={card} />
                                    )
                                }
                            </div>
                        </section>
                    )
                    :
                    <h2>Il n'y a pas de préstation pour le moment</h2>
            }
        </main>
    )
};

export default Services;