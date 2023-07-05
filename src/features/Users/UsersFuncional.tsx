import React from 'react';
import {UsersType} from "./users-reducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "../../common/components/Paginator/Paginator";

type PropsType = {
    users: UsersType[]
    // follow: (id: number, followed: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    onPageSize: (page: number) => void
    followingInProgress: number[]
    toggleIsFollowing: (disabled: boolean, id: number) => void
    followTC: (id: number, followed: boolean)=>void
    unFollowTC: (id: number, followed: boolean)=>void
}

export const UsersFuncional = (props: PropsType) => {

    return (
        <div>
            <div>
              <Pagination page={props.currentPage}
                          pageCount={props.pageSize}
                          totalItemsCount={props.totalUsersCount}
                          onPageCallBack={props.onPageChanged}
                          onPageCountCallBack={props.onPageSize}/>

            </div>
            {props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}><img
                                src={el.photos.small != null ? el.photos.small : "https://avatars.mds.yandex.net/i?id=f06cfbd960af17ee83248e9edb6212af-3986807-images-thumbs&n=13"}
                                alt="" style={{width: "130px"}}/></NavLink>
                        </div>
                        <div>
                            <button disabled={props.followingInProgress.some(id => {
                                console.log("Checking id:", id);

                            })} onClick={() => {
                                // запускаем кнопку disabled
                                props.toggleIsFollowing(true, el.id)
                                el.followed
                                    ? props.unFollowTC(el.id, el.followed)
                                    // usersAPI.unFollow(el.id).then((data) => {
                                    //
                                    //         if (data.resultCode === 0) {
                                    //             props.follow(el.id, el.followed)
                                    //         }
                                    //     // останавливаем кнопку disabled
                                    //         props.toggleIsFollowing(false, el.id)
                                    //     }
                                    // )
                                    : props.followTC(el.id, el.followed)
                                    // usersAPI.follow(el.id).then((data) => {
                                    //         if (data.resultCode === 0) {
                                    //             props.follow(el.id, el.followed)
                                    //         }
                                    //     // останавливаем кнопку disabled
                                    //         props.toggleIsFollowing(false, el.id)
                                    //     }
                                    // )
                            }
                            }>
                                {el.followed ? "Follow" : "Unfollow"}
                            </button>
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                    </span>


            </div>)}

        </div>
    );
};

