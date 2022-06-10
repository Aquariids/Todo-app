export enum formToggle{
    SIGN_UP = 'signUp',
    SIGN_IN = 'signIN',
    EXIT = 'exit',
}


export type IForm = formToggle.SIGN_IN|formToggle.SIGN_UP|formToggle.EXIT; 
export interface IAuthorizationState {
    typeForm:  IForm,
    login:string,
    password:string,
    error:string
}