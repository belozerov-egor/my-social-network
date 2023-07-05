import {ActionsType, DialogsPageType} from "../../redux/store";
import {v1} from "uuid";


const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: "Dimych BOSS"},
        {id: v1(), name: "Andrew Super"},
        {id: v1(), name: "Sveta Verstka"},
        {id: v1(), name: "Sasha IT-пацан"},
        {id: v1(), name: "Viktor JS"},
        {id: v1(), name: "Valera Летчик"},
        {id: v1(), name: "Ренат Рыжий"},
        {id: v1(), name: "Коля Кирпич"},
        {id: v1(), name: "Жека Бывалый"},
        {id: v1(), name: "Гена Запчасти"},
        {id: v1(), name: "Ваня Директор"},

    ],
    messages: [
        {id: v1(), message: "Привет!"},
        {id: v1(), message: "Как там твой курс по it-kamasutra?"},
        {id: v1(), message: "Как дела?"},

    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            let newMessage = {
                id: v1(),
                message: action.newValue
            }
            return {
                ...state, messages:
                    [...state.messages, newMessage]
            // state.messages.push({id: 6, message: body})
            // state.newMessageBody = ""
            // return state
        }
        }
        default:
            return state
    }
    // if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
    //     state.newMessageBody = action.payload.body
    //
    //
    // } else if (action.type === "ADD-NEW-MESSAGE") {
    //     let body = state.newMessageBody
    //     state.messages.push({id: 6, message: body})
    //     state.newMessageBody = ""
    //
    // }
    // return state
}

export type AddMessageType = ReturnType<typeof addMessageAC>

// export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export const addMessageAC = (newValue: string) => ({type: "ADD-NEW-MESSAGE", newValue} as const)

// export const updateNewMessageBodyAC = (body: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         payload: {
//             body
//         }
//     } as const
// }
