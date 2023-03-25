import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {UserProfile} from "../../utils/types";
import {changeFirstName, changeLastName, changeLogin} from "../../features/slices/userSlice";

const Register = () => {
    // const [login,setLogin] = useState('');
    const [password,setPassword] =useState('');
    // const [firstName,setFirstName] =useState('');
    // const [lastName,setLastName] =useState('');
    const {user} =useAppSelector<{user:UserProfile|null}>(store=>store);
    const dispatch = useAppDispatch();

    const handleClickRegister = () =>{
        //TODO
        console.log(user?.login,password,user?.firstName,user?.lastName)
    }
    const handleClickClear=()=>{
        dispatch(changeLogin(''));
        setPassword('');
        dispatch(changeFirstName(''));
        dispatch(changeLastName(''));
    }
    return (
        <div>
            <label>Login:
                <input type='text' onChange={e=>dispatch(changeFirstName(e.target.value.trim()))} value={user?.login}/>
            </label>
            <label>Password:
                <input type='password' onChange={e=>setPassword(e.target.value.trim())} value={password}/>
            </label>
            <label>First Name:
                <input type='text' onChange={e=>dispatch(changeFirstName(e.target.value.trim()))} value={user?.firstName}/>
            </label>
            <label>Last Name:
                <input type='text' onChange={e=>dispatch(changeLastName(e.target.value.trim()))} value={user?.lastName}/>
            </label>
            <button  onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default Register;