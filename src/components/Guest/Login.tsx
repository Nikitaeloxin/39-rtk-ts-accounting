import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {UserProfile} from "../../utils/types";
import {changeFirstName, changeLogin} from "../../features/slices/userSlice";

const Login = () => {
    // const [login,setLogin] = useState('');
    const {login} =useAppSelector<{login:string}>(store=>store.user);
    const dispatch = useAppDispatch();
    const [password,setPassword] =useState('');
    const handleClickLogin = () =>{
        //TODO
        console.log(login,password)
    }
    const handleClickClear=()=>{
        // setLogin('');
        dispatch(changeLogin(''));
        setPassword('');
    }
    return (
        <div>
           <label>Login:
               <input type='text' onChange={e=>dispatch(changeLogin(e.target.value.trim()))} value={login}/>
           </label>
            <label>Password:
                <input type='password' onChange={e=>setPassword(e.target.value.trim())} value={password}/>
            </label>
            <button  onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default Login;