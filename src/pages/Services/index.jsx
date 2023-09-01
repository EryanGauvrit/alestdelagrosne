import ServicesCards from "../../components/ServicesCards";

function Services({ servicesDatas }) {

    console.log(servicesDatas)

    return (
        <main className="services">
            <h1>Nos Prestations</h1>
            {
                (servicesDatas[0]) ?

                    servicesDatas.map((service) =>
                        <section key={service.id}>
                            <h2>{service.title}</h2>
                            <div className="cards-bloc">
                                {
                                    service.cards.map((card) =>
                                        <ServicesCards key={card.id} card={card} />
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