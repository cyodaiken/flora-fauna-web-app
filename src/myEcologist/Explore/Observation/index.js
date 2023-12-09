import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { search } from "../../Header/client";
import { fetchExplore } from "../client";

function Observation() {
  const { observationId } = useParams();

  const [observation, setObservation] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Fetch observation data from MongoDB
    fetchExplore(parseInt(observationId, 10)).then((data) => {
      setObservation(data);
      // Use the common_name from MongoDB data for searching
      search(data.common_name).then((results) => setQuery(results));
    });
  }, [parseInt(observationId, 10)]);

  // Check if observation is null before rendering
  if (observation === null) {
    return <div>Loading...</div>; // You can show a loading indicator or handle it differently
  }

  const getFormattedTime = () => {
    if (observation.time_observed_at) {
      return observation.time_observed_at.split(" +")[0];
    }
    return "None";
  };


  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-xl-6">
          <h2>{observation.common_name ? observation.common_name : "None"}</h2>
          <img src={observation.image_url} alt={observation.common_name} />
        </div>

        <div className="col-12 col-xl-6 mt-5">
          <h4 className="d-flex align-items-center gap-3 mb-3">
            {/* Other JSX... */}
          </h4>
          <div>
            <div className="fw-bold">Scientific Name:</div>
            {observation.scientific_name ? observation.scientific_name : "None"}
            <div className="fw-bold">Description:</div>
            {observation.description ? observation.description : "None"}
            <div dangerouslySetInnerHTML={{ __html: query.extract }}></div>
            <div className="fw-bold">Observed Location:</div>
            {observation.place_guess ? observation.place_guess : "None"}
            <div className="fw-bold">Observed:</div>
            {getFormattedTime()}
            {observation.time_zone}
            <div className="fw-bold">Submitted:</div>
            {observation.created_at.split(" +")[0] ? observation.created_at : "None"}
          </div>
        </div>
      </div>
      {observation.latitude && observation.longitude && (
        <div className="mt-4">
          <h4 className="mb-3">Observation Location on Map</h4>
          <iframe
            width="100%"
            height="500"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${observation.latitude},${observation.longitude}`}
          ></iframe>
        </div>
      )}
    </div>
  );
}
export default Observation;
