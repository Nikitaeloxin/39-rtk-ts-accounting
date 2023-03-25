import React, {useState} from 'react';

interface Props{
    close:()=>void
}
const ChangePassword = ({close}:Props) => {
    const [pass,setPass] = useState('');
    const [pass1,setPass1] = useState('');
    const [pass2,setPass2] = useState('');

    const handleClickClear = ()=>{
        setPass('');
        setPass1('');
        setPass2('');
    }

    const handleClickSave = ()=>{
        if (pass1 ===pass2){
            //TODO
            console.log(pass,pass1)
        }

    }
    return (
        <div>
            <label>Old password:
                <input type="password" onChange={e=>setPass(e.target.value.trim())} value={pass}/>
            </label>
            <label>New password:
                <input type="password" onChange={e=>setPass1(e.target.value.trim())} value={pass1}/>
            </label>
            <label>Repeat password:
                <input type="password" onChange={e=>setPass2(e.target.value.trim())} value={pass2}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={close}>Close without save</button>
        </div>
    );
};

export default ChangePassword;