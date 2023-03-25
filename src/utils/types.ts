export interface UserProfile{
    login:string,
    firstName:string,
    lastName:string,
    roles:string[]
}

export interface State{
    user:UserProfile,
    token:string
}