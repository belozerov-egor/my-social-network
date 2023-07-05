import React from "react";
import {PostType,} from "../../../redux/store";
import {addPost, updateNewPostText} from "../profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../app/redux-store";
import {connect} from "react-redux";

// type MyPostType = {
//   store: StoreType
//   // posts: PostType[];
//   // newPostText: string;
//   // dispatch: (action: ActionsType) => void
// };

// export const MyPostsContainer = () => {
//   let state = store.getState().profilePage;
//   const addPost = () => {
//     // props.addPost();
//     store.dispatch(addPostAC())
//   };
//
//   const onPostChange = (text:string) => {
//       store.dispatch(updatePostAC(text))
//
//     }
//   ;
//
//   return <MyPosts newPostText={state.newPostText} posts={state.posts} updateNewPostText={onPostChange}  addPost={addPost}/>

type MapStateToPropsType = {
    posts: PostType[]
}
// type MapDispatchToPropsType = {
//     updateNewPostText: (text: string) => void
//     addPost: () => void
// }

let mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return {
        posts: store.profilePage.posts
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateNewPostText: (text: string) => {
//             dispatch(updatePostAC(text))
//         },
//         addPost: () => {
//             dispatch(addPostAC())
//         }
//
//     }
// }


export const MyPostsContainer = connect
(mapStateToProps, {addPost })(MyPosts);

