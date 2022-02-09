import React from 'react';
import Nav from '../Nav';
import "./ProfileScreen.css";
import {useSelector} from "react-redux";
import { selectUser } from '../features/userSlice.js';
import netflixAvatar from "../assets/netflixAvatar.png";
import { auth } from '../firebase';
function ProfileScreen() {
    const user = useSelector(selectUser);
  return <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
          <h1>Edit Profile</h1>
          <div className="profileScreen__info">
              <img src={netflixAvatar} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
            </div>
      </div>
  </div>;
}

export default ProfileScreen;
