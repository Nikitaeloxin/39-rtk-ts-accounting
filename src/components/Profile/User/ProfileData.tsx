import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {UserProfile} from "../../../utils/types";

const ProfileData = () => {
    const {user} =useAppSelector<{user:UserProfile|null}>(store=>store);
    return (
        <div>
            <p>FirstName: {user?.firstName}</p>
            <p>LastNAme: {user?.lastName}</p>
            <p>Login: {user?.login}</p>
            <ul>
                {user?.roles.map((role,i)=><li key={i}>{role}</li>)}
            </ul>
        </div>
    );
};

export default ProfileData;