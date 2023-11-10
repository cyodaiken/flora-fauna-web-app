import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import db from '../Database';
import { Link } from 'react-router-dom';
import React from 'react';

function community () {
    const users = db.users;
    console.log(users)
 



    return (
        <div>
             <div style={{ width: "100%", height: "70px" }}> 
                <h2>The People of Ecologist </h2>
             </div>
             
             <div>
                 <ul className="nav wd-header" style={{ height: '70px' }}>
                    <li className="d-flex align-items-center col-lg " href= "#" style={{ marginLeft: '5%' }}>
                        Recently Active
                    </li>
                    <a className="d-flex align-items-center custom-nav-link active  active col-lg-2 col-md-1" href= "#">
                       <br />
                        People
                    </a>
                    <a className="d-flex align-items-center custom-nav-link col-lg-2 col-md-1" href= "#">
                        <br />
                        Forum
                    </a>
                    <a className="d-flex align-items-center custom-nav-link  col-lg-2 col-md-1" href= "#">
                       <br />
                        Leaderboard
                    </a>
                             </ul>
             </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4 wd-dashboard-grid" style={{marginTop:8}}>
                {users.map((user) => (
                    <Link
                        key={user.user_id}
                        to={`${user.user_id}`}
                        className="card custom-mx-0"

                    >
                        <img className="card-head" src={user.profile_pic} />
                            <div className="card-body" >
                                <h5 className="card-title"style={{marginTop:10}}>
                                    {user.given_name}  {user.family_name}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                    
                    </Link>
                    
                ))}
            </div>

        </div>
        );

}

export default community;