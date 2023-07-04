import { useEffect } from 'react';

function ChangeTitlePage({ titlePage }) {

    return (
        useEffect(() => {
            document.title = `${titlePage}`;
        })
    )
}

export default ChangeTitlePage;