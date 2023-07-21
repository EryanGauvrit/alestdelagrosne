import React from "react";

function BackTop({ currentPage }) {

    return (
        <React.Fragment>
            <a href="#backTop-anchor" className='backTop' style={currentPage === '/location' ? { display: 'none' } : {}}>
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </React.Fragment>
    )
}

export default BackTop;