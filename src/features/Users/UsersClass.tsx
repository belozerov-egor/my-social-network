import React from 'react';
import {UsersType} from "./users-reducer";
import {Users} from "./Users";
import preload from "../../assets/images/loader.gif";


type PropsType = {
    users: UsersType[]
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    // follow: (id: number, followed: boolean) => void
    // setUsers: (users: UsersType[]) => void
    // setCurrentPage: (newCurrentPage: number) => void
    // setTotalCount: (count: number) => void
    // preload: (onOff: boolean) => void
    toggleIsFollowing: (disabled: boolean, id: number)=>void
    followingInProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number)=>void
    pageNavigationTC: (page: number, pageSize: number)=>void
    followTC: (id: number, followed: boolean)=>void
    unFollowTC: (id: number, followed: boolean)=>void
}

export class UsersApiComponent extends React.Component<PropsType> {

    // componentDidMount() {
    //     this.props.preload(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.preload(false)
    //             this.props.setUsers(response.data.items);
    //             this.props.setTotalCount(response.data.totalCount);
    //         })
    // }
    //
    // onPageChanged = (p: number) => {
    //     this.props.preload(true)
    //     this.props.setCurrentPage(p)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
    //     ${this.props.currentPage}&count=${this.props.pageSize}`)
    //         .then(response => {
    //                 this.props.preload(false)
    //                 this.props.setUsers(response.data.items)
    //             }
    //         )
    //
    // }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.preload(true);
        // usersAPI.fetchUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.setUsers(data.items);
        //     this.props.setTotalCount(data.totalCount);
        //     this.props.preload(false);
        // })
    }

    // async fetchUsers(page: number, pageSize: number) {
    //     try {
    //         const response = await axios.get(
    //             `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
    //         );
    //         this.props.setUsers(response.data.items);
    //         this.props.setTotalCount(response.data.totalCount);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         this.props.preload(false);
    //     }
    // }

    onPageChanged = (page: number) => {
        this.props.pageNavigationTC(page, this.props.pageSize)


        // this.props.preload(true);
        // this.props.setCurrentPage(page);
        // usersAPI.fetchUsers(page, this.props.pageSize).then((data) => {
        //     this.props.setUsers(data.items)
        //     this.props.preload(false);
        // })
    };
    onPageSize = (pageSize: number) => {
        this.props.getUsersTC(this.props.currentPage, pageSize)
    }

    render() {


        return <>
            {this.props.isFetching && <img src={preload} alt={'preload'}/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
                currentPage={this.props.currentPage}
                onPageSize={this.onPageSize}
            />
        </>
    }
}

