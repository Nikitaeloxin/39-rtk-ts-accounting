import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {changeFirstName, changeLastName} from "../../../features/slices/userSlice";

interface Props{
    close:()=>void
}

const EditUser = ({close}:Props) => {
    // const [firstName,setFirstName] =useState('');
    // const [lastName,setLastName] =useState('');
    const {firstName,lastName} =useAppSelector(store=>store.user);
    const dispatch = useAppDispatch();

    const handleClickSave=()=>{
        //TODO
        console.log(firstName,lastName);
        close();
    }

    const handleClickClear=()=>{
        // setFirstName('')
        // setLastName('')
        dispatch(changeFirstName(''));
        dispatch(changeLastName(''));
    }
    return (
        <div>
            <label>First Name:
                <input type='text' onChange={e=>dispatch(changeFirstName(e.target.value.trim()))} value={firstName}/>
            </label>
            <label>Last Name:
                <input type='text' onChange={e=>dispatch(changeLastName(e.target.value.trim()))} value={lastName}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={close}>Close without save</button>
        </div>
    );
};

export default EditUser;