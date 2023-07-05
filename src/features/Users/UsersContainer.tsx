import {ComponentType} from 'react';
import {AppStateType} from "../../app/redux-store";
import {
    followTC,
    getUsersTC,
    pageNavigationTC,
    toggleIsFollowing,
    unFollowTC,
    UsersType
} from "./users-reducer";
import {connect} from "react-redux";
import {UsersApiComponent} from "./UsersClass";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from './users-selectors';

type mapStateToProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
    followingInProgress: number[]
}

// type MapDispatchType = {
//     follow: (id: number,followed: boolean)=>void
//     setUsers: (users: UsersType[])=>void
//     setCurrentPage: (newCurrentPage: number)=> void
//     setTotalUsersCount: (count: number)=>void
//     setPreload: (on: boolean)=>void
// }

let mapStateToProps = (store: AppStateType):mapStateToProps => {

    return {
        users: getUsers(store),
        pageSize: getPageSize(store),
        totalUsersCount: getTotalUsersCount(store),
        currentPage: getCurrentPage(store),
        isFetching: getIsFetching(store),
        followingInProgress: getFollowingInProgress(store)
    }
}
// let mapDispatchToProps = (dispatch: Dispatch):MapDispatchType => {
//     return {
//         follow: (id: number,followed: boolean) => {
//             dispatch(followAC(id, followed))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (newCurrentPage: number)=> {
//             dispatch(setCurrentPageAC(newCurrentPage))
//         },
//         setTotalUsersCount: (count: number)=>{
//             dispatch(setTotalCountAC(count))
//         },
//         setPreload: (onOff: boolean)=> {
//             dispatch(preloadAC(onOff))
//         }
//     }
// }

export default  compose<ComponentType>(
    connect(mapStateToProps, {toggleIsFollowing, getUsersTC, pageNavigationTC, unFollowTC, followTC}),
    withAuthRedirect
)(UsersApiComponent)


