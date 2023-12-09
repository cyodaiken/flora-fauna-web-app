import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useParams, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { search } from "../../Header/client";
import { fetchExplore } from "../client";
import * as client from "../client";

function Observation() {
  const { observationId } = useParams();

  const [observation, setObservation] = useState(null);
  const [query, setQuery] = useState("");
  const [followers, setFollowers] = useState([]);

  const FetchFollowers = async () => {
    const followers = await client.findFollowersByPost(observationId);
    console.log(followers);
    setFollowers(followers);
  };
  const followPost = async () => {
    const status = await client.userFollowPost(observationId);
  };
  const unFollowPost = async () => {
    const status = await client.userUnfollowPost(observationId);
  };

  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const getServerCurrentUser = await client.account();
      setCurrentUser(getServerCurrentUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Fetch observation data from MongoDB
    fetchExplore(parseInt(observationId, 10)).then((data) => {
      setObservation(data);
      // Use the common_name from MongoDB data for searching
      // search(data.common_name).then((results) => setQuery(results));
    });
    FetchFollowers();
    fetchCurrentUser();
  }, [parseInt(observationId, 10)]);

  // Check if observation is null before rendering
  if (observation === null) {
    return <div>Loading...</div>; // You can show a loading indicator or handle it differently
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-xl-6">
          <h2>{observation.common_name}</h2>
          <img src={observation.image_url} alt={observation.common_name} />
        </div>

        <div className="col-12 col-xl-6 mt-5">
          {/* when user is logged in */}
          <div>
            {currentUser && (
              <>
                <button
                  onClick={() => unFollowPost()}
                  className="btn btn-warning float-end"
                >
                  Unfollow
                </button>
                <button
                  onClick={() => followPost()}
                  className="btn btn-success float-end"
                >
                  Follow Post
                </button>
              </>
            )}
          </div>

          <h4 className="d-flex align-items-center gap-3 mb-3">
            <FaRegUserCircle style={{ fontSize: "40px" }} />
            <div className="fw-bold">
              {observation.user_name ? observation.user_name : "No user name"}
            </div>
          </h4>
          <div>
            <div className="fw-bold">Scientific Name:</div>
            {observation.scientific_name}
            <div className="fw-bold">Description:</div>
            {observation.description ? observation.description : "None"}
            <div dangerouslySetInnerHTML={{ __html: query.extract }}></div>
            <div className="fw-bold">Observed Location:</div>
            {observation.place_guess}
            <div className="fw-bold">Observed:</div>
            {observation.time_observed_at.split(" +")[0]}{" "}
            {observation.time_zone}
            <div className="fw-bold">Submitted:</div>
            {observation.created_at.split(" +")[0]}
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
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=${observation.latitude},${observation.longitude}`}
          ></iframe>
        </div>
      )}
      <h3>Followers</h3>
      <div className="list-group">
        {followers.map((follows) => (
          <Link
            to={`/community/${follows.follower.user_id}`}
            className="list-group-item list-group-item-action"
            key={follows.follower.user_id}
          >
            {follows.follower.user_name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Observation;
