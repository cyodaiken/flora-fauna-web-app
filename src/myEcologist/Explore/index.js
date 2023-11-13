import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import db from '../Database';
import { Link, Route, useParams } from 'react-router-dom';
import React, { useState } from 'react';

function Explore() {
    const uniqueSpecies = new Set(db.observations.map(observation => observation.species_guess));
    const uniqueObservers = new Set(db.observations.map(observation => observation.user_id));
    const observations = db.observations;

    const itemsPerPage = 40; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(observations.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const maxPageNumbersToShow = 10; // Number of page numbers to show in the pagination control

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
        startPage = endPage - maxPageNumbersToShow + 1;
    }

    return (
        <div>
            <div style={{ width: "100%", height: "70px" }}></div>

            <ul className="nav wd-header" style={{ height: '70px' }}>
                <li className="d-flex align-items-center col" style={{ marginLeft: '5%' }}>
                    The World
                </li>
                <a className="d-flex align-items-center custom-nav-link active col-lg-2">
                    {db.observations.length} <br />
                    OBSERVATIONS
                </a>
                <a className="d-flex align-items-center custom-nav-link col-lg-2">
                    {uniqueSpecies.size} <br />
                    SPECIES
                </a>
                <a className="d-flex align-items-center custom-nav-link col-lg-2">
                    {uniqueObservers.size} <br />
                    OBSERVERS
                </a>
            </ul>

            <div className="d-flex flex-row flex-wrap mt-5">
                {observations
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((observation) => (
                        <Link
                            key={observation._id}
                            to={`${observation.id}`}
                            className="card custom-mx-0"
                        >
                            <img className="card-head" src={observation.image_url} />
                            <div className="card-body">
                                <div style={{ fontWeight: 'bold' }}>
                                    {observation.common_name}
                                </div>
                                <div className='float-end'>
                                    {observation.user_name}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="pagination justify-content-center pb-4">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    {"<"}
                </button>
                {pageNumbers
                    .slice(startPage - 1, endPage)
                    .map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`${currentPage === pageNumber ? 'active' : ''}`}
                        >
                            {pageNumber}
                        </button>
                    ))
                }
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default Explore;
