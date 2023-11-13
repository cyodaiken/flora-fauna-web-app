import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import db from '../Database';
import { Link, Route, useParams } from 'react-router-dom';
import React, { useState } from 'react';

function Explore() {
    const uniqueSpecies = new Set(db.observations.map(observation => observation.species_guess));
    const uniqueObservers = new Set(db.observations.map(observation => observation.user_id));

    const itemsPerPage = 39;
    const maxPageNumbersToShow = 9;

    // Observations
    const [currentPageObservations, setCurrentPageObservations] = useState(1);
    const totalPagesObservations = Math.ceil(db.observations.length / itemsPerPage);
    const pageNumbersObservations = Array.from({ length: totalPagesObservations }, (_, index) => index + 1);
    let startPageObservations = Math.max(1, currentPageObservations - Math.floor(maxPageNumbersToShow / 2));
    let endPageObservations = Math.min(totalPagesObservations, startPageObservations + maxPageNumbersToShow - 1);
    if (endPageObservations - startPageObservations + 1 < maxPageNumbersToShow) {
        startPageObservations = endPageObservations - maxPageNumbersToShow + 1;
    }

    const observations = db.observations
        .slice((currentPageObservations - 1) * itemsPerPage, currentPageObservations * itemsPerPage)
        .map((observation) => (
            <Link
                key={observation._id}
                to={`${observation.id}`}
                className="card"
            >
                <img className="card-head" src={observation.image_url} alt={observation.common_name} />
                <div className="card-body">
                    <div style={{ fontWeight: 'bold' }}>
                        {observation.common_name}
                    </div>
                    <div className='float-end'>
                        {observation.user_name}
                    </div>
                </div>
            </Link>
        ));

    // Species 
    const [currentPageSpecies, setCurrentPageSpecies] = useState(1);
    const speciesDictionary = {};
    db.observations.forEach(observation => {
        if (!speciesDictionary[observation.common_name]) {
            speciesDictionary[observation.common_name] = {
                scientific_name: observation.scientific_name,
                image_urls: [observation.image_url]
            };
        } else {
            speciesDictionary[observation.common_name].image_urls.push(observation.image_url);
        }
    });
    const totalPagesSpecies = Math.ceil(Object.keys(speciesDictionary).length / itemsPerPage);
    const pageNumbersSpecies = Array.from({ length: totalPagesSpecies }, (_, index) => index + 1);
    let startPageSpecies = Math.max(1, currentPageSpecies - Math.floor(maxPageNumbersToShow / 2));
    let endPageSpecies = Math.min(totalPagesSpecies, startPageSpecies + maxPageNumbersToShow - 1);
    if (endPageSpecies - startPageSpecies + 1 < maxPageNumbersToShow) {
        startPageSpecies = endPageSpecies - maxPageNumbersToShow + 1;
    }

    const speciesCards = Object.keys(speciesDictionary)
    .slice((currentPageSpecies - 1) * itemsPerPage, currentPageSpecies * itemsPerPage)
    .map((commonName) => (
        <Link
            key={commonName}
            to={`${commonName}`} 
            className="card"
        >
            <img className="card-head" src={speciesDictionary[commonName].image_urls[0]} alt={commonName} />
            <div className="card-body">
                <div style={{ fontWeight: 'bold' }}>
                    {commonName}
                </div>
                <div>
                    ({speciesDictionary[commonName].scientific_name})
                </div>
            </div>
        </Link>
    ));


    const handlePageChangeObservations = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPagesObservations) {
            setCurrentPageObservations(pageNumber);
        }
    };

    const handlePageChangeSpecies = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPagesSpecies) {
            setCurrentPageSpecies(pageNumber);
        }
    };

    return (
        <div>
            <div style={{ width: "100%", height: "70px" }}></div>

    
            <ul className="nav nav-pills mb-3 wd-header" id="pills-tab" role="tablist" style={{ height: '70px' }}>
                <li className="d-flex align-items-center col" style={{ marginLeft: '5%' }}>
                    The World
                </li>  
                <button className="custom-nav-link active d-flex align-items-center col-lg-2 border-0" id="pills-observation-tab" data-bs-toggle="pill" data-bs-target="#pills-observation" type="button" role="tab" aria-controls="pills-observation" aria-selected="true">
                    {db.observations.length} <br />
                    OBSERVATIONS
                </button>
                <button className="custom-nav-link d-flex align-items-center col-lg-2 border-0" id="pills-species-tab" data-bs-toggle="pill" data-bs-target="#pills-species" type="button" role="tab" aria-controls="pills-species" aria-selected="false">
                    {uniqueSpecies.size} <br />
                    SPECIES
                </button>
                <button className="custom-nav-link d-flex align-items-center col-lg-2 border-0" id="pills-observers-tab" data-bs-toggle="pill" data-bs-target="#pills-observers" type="button" role="tab" aria-controls="pills-observers" aria-selected="false">
                    {uniqueObservers.size} <br />
                    OBSERVERS
                </button>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-observation" role="tabpanel" aria-labelledby="pills-observation-tab">
                    <div className="container my-5">
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            {observations}
                        </div>
                    </div>
                    <div className="pagination justify-content-center pb-4">
                        <button onClick={() => handlePageChangeObservations(currentPageObservations - 1)} disabled={currentPageObservations === 1}>
                            {"<"}
                        </button>
                        {pageNumbersObservations
                            .slice(startPageObservations - 1, endPageObservations)
                            .map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChangeObservations(pageNumber)}
                                    className={`${currentPageObservations === pageNumber ? 'active' : ''}`}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        <button onClick={() => handlePageChangeObservations(currentPageObservations + 1)} disabled={currentPageObservations === totalPagesObservations}>
                            {">"}
                        </button>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-species" role="tabpanel" aria-labelledby="pills-species-tab">
                    <div className="container my-5">
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            {speciesCards}
                        </div>
                    </div>
                    <div className="pagination justify-content-center pb-4">
                        <button onClick={() => handlePageChangeSpecies(currentPageSpecies - 1)} disabled={currentPageSpecies === 1}>
                            {"<"}
                        </button>
                        {pageNumbersSpecies
                            .slice(startPageSpecies - 1, endPageSpecies)
                            .map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChangeSpecies(pageNumber)}
                                    className={`${currentPageSpecies === pageNumber ? 'active' : ''}`}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        <button onClick={() => handlePageChangeSpecies(currentPageSpecies + 1)} disabled={currentPageSpecies === totalPagesSpecies}>
                            {">"}
                        </button>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-observers" role="tabpanel" aria-labelledby="pills-observers-tab">
                    observers
                </div>
            </div>
        </div>

            
    );
}

export default Explore;



