function Services({ servicesDatas }) {

    console.log("Services : ", servicesDatas);

    return (
        <main>
            <h1>Nos Prestations</h1>
            {
                (servicesDatas[0]) ?

                    servicesDatas.map((service) =>
                        <section key={service.id}>
                            <h2>{service.title}</h2>
                        </section>
                    )
                    :
                    <h2>Il n'y a pas de préstation pour le moment</h2>
            }
        </main>
    )
};

export default Services;