import React, {useState} from 'react';
import EditUser from "./EditUser";
import ChangePassword from "./ChangePassword";

const UpdateUser = () => {
    const [updateAction,setUpdateAction] = useState('');
    switch (updateAction){
        case 'editUser':
            return <EditUser close={()=>setUpdateAction('')}/>
        case 'changePassword':
            return <ChangePassword close={()=>setUpdateAction('')}/>
        default:
            return (
                <div>
                    <button onClick={()=>setUpdateAction('changePassword')}>Change password</button>
                    <button onClick={()=>setUpdateAction('editUser')}>Edit user profile</button>
                </div>
            );

    }

};

export default UpdateUser;