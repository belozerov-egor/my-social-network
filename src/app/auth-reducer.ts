import {Dispatch} from "redux";
import {authApi, loginApi, profileAPI} from "../api/api";
import {AppDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";


export type AuthType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}


const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: true
}


export const authReducer = (state= initialState, action: ActionType): AuthType=> {
switch (action.type) {
    case 'SET-USER-DATA': {
        return {
            ...state,
            ...action.payload.data,
        }
    }default: return state
}
}

type ActionType = setUsersDataType

type setUsersDataType = ReturnType<typeof setUsersData>

export const setUsersData = (data: AuthType)=> {
    return{
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    }as const
}

export const authTC = ()=>async (dispatch: Dispatch)=> {
  const result = await  authApi.auth()
        result.data.resultCode === 0 && dispatch(setUsersData({...result.data.data, isAuth: true}))
}

export const login = (email: string, password: string, rememberMe: boolean)=>async (dispatch: AppDispatch)=> {
    try {
        const result = await  loginApi.login(email,password,rememberMe)
        if (result.data.resultCode === 0) {
            dispatch(authTC())
        } else {
            dispatch(stopSubmit("login", {_error: result.data.messages[0]}))
        }
    }catch (e){
        console.log(e)
    }
}
export const logout = ()=>async (dispatch: AppDispatch)=> {
    try {
        const result = await  loginApi.logout()
        result.data.resultCode === 0 && dispatch(setUsersData({id: null, login: null, email: null, isAuth: false}))
    }catch (e){
        console.log(e)
    }
}
