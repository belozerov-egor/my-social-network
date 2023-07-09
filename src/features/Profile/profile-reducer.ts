import {ActionsType, PhotosType, ProfilePageType, ProfileUserType} from "../../redux/store";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Это мой первый пост", likesCount: 12},
        {id: 2, message: "Мама, я в инкубаторе", likesCount: 11},
        {id: 3, message: "Блабла", likesCount: 11},
        {id: 4, message: "Пропсы мне только снятся", likesCount: 11},
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
                message: action.payload.newValue,
                likesCount: 0,
            };
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "UPDATE-PHOTO-SUCCESS":{
            // @ts-ignore
            return {...state, profile: {
                ...state.profile, photos: action.payload.photos
                }}
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
export type UpdatePhotoType = ReturnType<typeof updatePhotoSuccess>

export const addPost = (newValue: string) => {
    return {
            type: "ADD-POST",
            payload: {
                newValue
            }
        }as const
     }
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

export const updatePhotoSuccess= (photos: PhotosType)=> {
    return {
        type: "UPDATE-PHOTO-SUCCESS",
        payload: {
            photos
        }
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
export const updatePhoto = (photo: File) => async (dispatch: Dispatch)=> {
    try {
        const result = await profileAPI.updatePhoto(photo)
        if (result.data.resultCode === 0){
            dispatch(updatePhotoSuccess(result.data.data.photos))
        }
    }catch (e){
        console.log(e)
    }


}
