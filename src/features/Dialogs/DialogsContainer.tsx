import React, {ComponentType} from "react";
import {DialogsPageType,} from "../../redux/store";
import {addMessageAC} from "./dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";


// const DialogsContainer = (props: DialogsProps) => {
//     let state = props.store.getState().dialogsPage;
//     const addPost = () => {
//         // props.addPost();
//         props.store.dispatch(addMessageAC())
//     };
//
//     const onPostChange = (text: string) => {
//         // props.updateNewPostText(newPostElement.current.value);
//         props.store.dispatch(updateNewMessageBodyAC(text))
//     };
//     return <Dialogs
//         dialogs={state.dialogs}
//         messages={state.messages}
//         newMessageBody={state.newMessageBody}
//         addPost={addPost}
//         updateNewPostText={onPostChange}/>
//
//
// };


type MapStateToPropsType = {
    dialogs: DialogsPageType
}

type MapDispatchToPropsType = {
    addPost: (newValue: string) => void
}
let mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return {
        dialogs: store.dialogsPage,
        // messages: store.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newValue: string) => {
            dispatch(addMessageAC(newValue))
        },

    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
