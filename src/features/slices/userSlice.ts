import {createSlice} from "@reduxjs/toolkit";
import {UserProfile} from "../../utils/types";

const initialState:UserProfile|null = {login:'',firstName:'',lastName:'',roles:[]};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        deleteUser:(state)=> initialState,
        changeLogin(state:UserProfile|null,action){
            state!.login = action.payload;
        },
        changeFirstName(state:UserProfile|null,action){
            state!.firstName = action.payload;
        },
        changeLastName(state:UserProfile|null,action){
            state!.lastName = action.payload;
        },
        addRole(state:UserProfile|null,action){
            state!.roles.push(action.payload);
        }

    }

})

export const {deleteUser,changeLogin,changeFirstName,changeLastName,addRole} = userSlice.actions
export default userSlice.reducer
