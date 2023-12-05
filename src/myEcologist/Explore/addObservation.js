import React, {useEffect, useState } from 'react';
import * as client from "./client";
import { useNavigate, useParams, Link } from "react-router-dom";

function AddObservation() {
    const [observations, setObservations] = useState([]);
    const [observation, setObservation] = useState({});
    const navigate = useNavigate(); 

    
    const addObservations = async () => {
        const newObservation = await client.addNewExplore(observation);
        setObservations([...observations, newObservation]);
        navigate(`/Explore`);
    };

    return (
        <div>
        <h1>Add Observation</h1>
        <input 
            type="text"
            className="form-control mb-2"
            onChange={(e) =>
                setObservation({ ...observation, common_name: e.target.value})
            }/>

        <button onClick={addObservations}>Add Observation</button>
        </div>
  );
}
export default AddObservation;
