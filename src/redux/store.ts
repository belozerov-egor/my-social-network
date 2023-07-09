import {
    AddPostActionType,
    SetStatusType,
    SetUserProfileType,
    UpdateNewPostTextType, UpdatePhotoType,
    UpdateStatusType
} from "../features/Profile/profile-reducer";
import {AddMessageType} from "../features/Dialogs/dialogs-reducer";
import {
    FollowACType,
    PreloadACType,
    SetCurrentPageACType,
    SetTotalCountACType,
    SetUsersACType,
    ToggleIsFollowingType
} from "../features/Users/users-reducer";


// let store: StoreType = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 11},
//                 {id: 3, message: "Blabla", likesCount: 11},
//                 {id: 4, message: "Dada", likesCount: 11},
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrew"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Viktor"},
//                 {id: 6, name: "Valera"},
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your it-kamasutra?"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"},
//             ],
//             newMessageBody: "",
//         },
//     },
//     _callSubscriber() {
//         console.log("123");
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: RootStateType) => void) {
//         this._callSubscriber = observer  /// Это патерн, обсрвер
//     },

// addPost() {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state);
// },
// updateNewPostText(newText: string) {
//     this._state.profilePage.newPostText = newText
//     this._callSubscriber(this._state);
// },
// addMessage() {
//     let newDialog = {
//         id: 6,
//         message: this._state.dialogsPage.newMessageBody
//     }
// },


//action это объект
// dispatch(action: ActionsType) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._callSubscriber(this._state);
// if (action.type === ADD_POST) {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state);
//
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.profilePage.newPostText = action.newText
//     this._callSubscriber(this._state);

//     } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         this._state.dialogsPage.newMessageBody = action.body
//         this._callSubscriber(this._state);
//
//     } else if (action.type === ADD_NEW_MESSAGE) {
//         let body = this._state.dialogsPage.newMessageBody
//         this._state.dialogsPage.messages.push({id: 6, message: body})
//         this._state.dialogsPage.newMessageBody = ""
//         this._callSubscriber(this._state);
//     }
// },

//     }
// }

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextType
    | AddMessageType
    | FollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalCountACType
    | PreloadACType
    | SetUserProfileType
    | ToggleIsFollowingType
    | SetStatusType
    | UpdateStatusType
    | UpdatePhotoType


export type StoreType = {
    _state: RootStateType
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    // addPost: () => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: DispatchType
    // addMessage: () => void
}

export type DispatchType = (action: ActionsType) => void


export type PostType = {
    id: number;
    message: string;
    likesCount: number;

};

export type DialogType = {
    id: string;
    name: string;
};

export type MessagesType = {
    id: string;
    message: string;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    profile: ProfileUserType | null
    status: string
};

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type PhotosType = {
    small: string
    large: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessagesType>;
};
// type SidebarType = {};

export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    // sidebar: SidebarType;
};


// export default store;
