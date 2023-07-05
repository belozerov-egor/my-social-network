import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType,} from "../../redux/store";
import {AddMessageFormRedux, FormDataType} from "./AddMessageForm/AddMessageForm";
import style from "./Dialogs.module.scss"
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

type DialogsProps = {
    dialogs: DialogsPageType;
    // newMessageBody: string;
    addPost: (newValue: string) => void;
    updateNewPostText: (text: string) => void;
};

const Dialogs = (props: DialogsProps) => {
    let dialogsElements = props.dialogs.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id}/>
    ));
    let messagesElements = props.dialogs.messages.map((m) => (
        <Message id={m.id} message={m.message}/>
    ));

    // const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addPost = (values: FormDataType) => {
        props.addPost(values.newMassageBody);
        values.newMassageBody = ""
        // props.dispatch(addMessageAC())
    };


    return (
        <div className={style.dialogsBlock}>
            <div className={style.namesBlock}>
                {dialogsElements}
            </div>
            <div className={style.messageBlock}>
                <div className={style.textBlock}>
                    <div className={style.leftText}>
                        <SvgSelector svgName={"Profile"}/>
                        <span>Привет друг!</span>
                    </div>
                    <div className={style.rightText}>
                            {messagesElements}
                    </div>
                </div>
                <AddMessageFormRedux onSubmit={addPost}/>
            </div>

        </div>
    );
};


export default Dialogs;
