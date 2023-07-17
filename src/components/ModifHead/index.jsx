import { useEffect } from 'react';

function ModifHead({ titlePage, description, robots }) {

    const metaDescription = document.querySelector('meta[name="description"]');
    const metaRobots = document.querySelector('meta[name="robots"]');

    return (

        useEffect(() => {
            document.title = titlePage;
            metaDescription.content = description;
            metaRobots.content = robots;
        })

    );
};

export default ModifHead;