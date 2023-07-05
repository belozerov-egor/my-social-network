import {ActionsType, ProfilePageType, ProfileUserType} from "../../redux/store";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ],
    profile: null,
    status:"Заглушка"
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {


    //Можно через if else
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: action.newValue,
                likesCount: 0,
            };
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>

export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>
export type UpdateStatusType = ReturnType<typeof updateStatus>

export const addPost = (newValue: string) => ({type: "ADD-POST", newValue} as const)


//Так же как и сверху, только без Return
export const updateNewPostText = (newText: string) => {

    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: newText,
        }
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {

    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile,
        }
    } as const
}

export const setStatus = (status: string)=> {
    return {
        type: 'SET-STATUS',
        status
    }as const
}

export const updateStatus = (status: string)=> {
    return {
        type: 'UPDATE-STATUS',
        status
    }as const
}

export const getProfileTC = (userId: string) => async (dispatch: Dispatch) => {
   const result = await profileAPI.getProfile(userId)
    try {
        dispatch(setUserProfile(result.data))
    }catch (e){
        console.log(e)
    }
}

export const getStatusTC = (userId: string) => async (dispatch: Dispatch)=> {
    const result = await profileAPI.getStatus(userId)
    dispatch(setStatus(result.data))

}
export const updateStatusTC = (status: string) => async (dispatch: Dispatch)=> {
    await profileAPI.updateStatus(status)
    dispatch(setStatus(status))

}
