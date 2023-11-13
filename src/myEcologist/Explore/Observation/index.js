import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import db from '../../Database';
import { useParams } from 'react-router-dom';
import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

function Observation() {
  const { observationId } = useParams();
  const observation = db.observations.find(obs => obs.id === parseInt(observationId));

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-xl-6">
          <h2>{observation.common_name}</h2>
          <img src={observation.image_url} alt={observation.common_name} />
        </div>
        <div className="col-12 col-xl-6 mt-5">
          <h4 className='d-flex align-items-center gap-3 mb-3'>
            <FaRegUserCircle style={{ fontSize: '40px' }} />
            <div className='fw-bold'>
              {observation.user_name ? observation.user_name : "No user name"}
            </div>
          </h4>
        <div>
        <div className='fw-bold'>
              Scientific Name:
            </div>
            {observation.scientific_name}
            <div className='fw-bold'>
                Description:
            </div>
            {observation.description ? observation.description: "None"}

          
            <div className='fw-bold'>
              Observed Location: 
            </div>
            {observation.place_guess}
            <div className='fw-bold'>
              Observed:
            </div>
            {observation.time_observed_at.split(' +')[0]}  {observation.time_zone}
            <div className='fw-bold'>
              Submitted: 
            </div>
            {observation.created_at.split(' +')[0]}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Observation;

