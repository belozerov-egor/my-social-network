import React, {ChangeEvent, FC} from 'react';
import style from './ProfileEditForm.module.scss'

type PropsType = {
    edit: boolean;
    updatePhoto: (photo: File)=> void
}
export const ProfileEditForm: FC<PropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
       if (e.target?.files?.length) {
           props.updatePhoto(e.target.files[0])
       }
    }

    return (
        <>
            {props.edit &&
                <div className={style.profileEditBlock}>
                    <label className={style.customFile}>
                        <input type="file" onChange={onChangeHandler}/>
                    </label>

                </div>
            }
        </>
    );
};

