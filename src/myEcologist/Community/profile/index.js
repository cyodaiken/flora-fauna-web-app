import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import db from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { FaBinoculars } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import { BsShieldFillExclamation } from "react-icons/bs";
import { IoIosJournal } from "react-icons/io";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";

function Profile() {
  const { userId } = useParams();

  const user = db.users.find((usr) => usr.user_id === userId);

  console.log(user);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3 col-sm-12 order-md-1 order-1">
          <h3>PROFILE</h3>
          <h2>{user.email}</h2>
          <img
            src={user.profile_pic}
            className="img-fluid"
            style={{ maxWidth: "auto", height: "300px" }}
          />
        </div>
        <div className="col-md-9 col-sm-12 order-md-2 order-2">
          <h2>{user.given_name}</h2>
          <BsFillCalendar2DateFill
            style={{ fontSize: "15px", marginRight: 5 }}
          />
          Joined: {user.created_at.split("T")[0]}
          <AiOutlineClockCircle
            style={{ fontSize: "15px", marginLeft: 20, marginRight: 5 }}
          />
          Last Active: {user.last_login.split("T")[0]}
          <MdMarkEmailRead
            style={{
              fontSize: "15px",
              marginLeft: 20,
              marginRight: 5,
              color: "green",
            }}
          />
          Verified: {user.email_verified ? "Yes" : "No"}
          <div className="mb-4 text-md-start">
            <p style={{ marginTop: 25 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-none d-md-block" style={{ marginTop: 10 }}>
          <div class="list-group">
            <a class="list-group-item" href="#">
              <FaBinoculars style={{ color: "green", marginRight: 10 }} />{" "}
              Observations
            </a>
            <a class="list-group-item" href="#">
              <BiSolidLeaf style={{ color: "green", marginRight: 10 }} />{" "}
              Species
            </a>{" "}
            <a class="list-group-item" href="#">
              <BsShieldFillExclamation
                style={{ color: "green", marginRight: 10 }}
              />{" "}
              Identifications
            </a>{" "}
            <a class="list-group-item" href="#">
              <IoIosJournal style={{ color: "green", marginRight: 10 }} />
              Journal Posts
            </a>{" "}
            <a class="list-group-item" href="#">
              <BsReverseListColumnsReverse
                style={{ color: "green", marginRight: 10 }}
              />
              Lists
            </a>{" "}
            <a class="list-group-item" href="#">
              <FaPeopleArrows style={{ color: "green", marginRight: 10 }} />
              Followers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

//  <div className="container my-4">
//         <div className="row">
//           <div className="col-6 col-md-3">
//             <h3>PROFILE</h3>
//             <h2>{user.email}</h2>
//             <img src={user.profile_pic} style={{ width: '300px', height: '300px' }} />
//             <div className='col-6 d-flex float-end'>
//                 <h2>Description</h2>

//             </div>
//           </div>
//           <div className="col-12 col-xl-6 mt-5">
//             <h4 className='d-flex align-items-center gap-3 mb-3'>
//               <FaRegUserCircle style={{ fontSize: '40px' }} />
//               <div className='fw-bold'>
//                 {user.given_name? user.family_name : "No user name"}
//               </div>
//             </h4>
//           <div>
//           <div className='fw-bold'>
//                 Scientific Name:
//               </div>
//               {user.nickname}
//               <div className='fw-bold'>
//                   Description:
//               </div>
//               {user.last_login? user.last_login: "Login not found"}

//               <div className='fw-bold'>
//                 Observed Location:
//               </div>
//               {user.email}
//               <div className='fw-bold'>
//                 Observed:
//               </div>

//           </div>
//           </div>
//         </div>
//       </div>
