// Species.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Species({ speciesDictionary }) {
    // Get the commonName from route parameters
    const { commonName } = useParams();

    // Retrieve species data based on commonName from speciesDictionary
    const speciesData = speciesDictionary[commonName];

    // Render species details
    return (
        <div>
            <h2>{commonName} Species Details</h2>
            <div>
                {/* Render species details based on the speciesData */}
                {speciesData && (
                    <div className="card">
                        <img className="card-head" src={speciesData.image_urls[0]} alt={commonName} />
                        <div className="card-body">
                            <div style={{ fontWeight: 'bold' }}>
                                {commonName}
                            </div>
                            <div>
                                ({speciesData.scientific_name})
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Species;
