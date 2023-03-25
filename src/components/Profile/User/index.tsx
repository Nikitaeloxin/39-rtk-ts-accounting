import React from 'react';
import ProfileData from "./ProfileData";
import UpdateUser from "./UpdateUser";

const Profile = () => {
    return (
        <div>
            <ProfileData/>
            <button>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;