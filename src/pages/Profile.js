import React from 'react';
import Camera from '../components/svg/Camera';


const Profile = () => {
    return (
    <section>
        <div className="profile_container">
            <div className="img_container">
                
            <img src="person.svg" alt="profile pic"/>
            <div className="overlay">
                <div>
                    <label htmlFor="photo">
                    <Camera />
                    </label>
                    <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="photo"
                    />
                </div>
            </div>
            </div>
            <div className="text_container">
                <h3>User Name</h3>
                <p>User email</p>
                <hr/>
                <small>Joined on: ...</small>
            </div>
        </div>
    </section>
    );
};

export default Profile;