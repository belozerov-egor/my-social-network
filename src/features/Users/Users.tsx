import React, {FC} from 'react';
import {StateType, UsersType} from "./users-reducer";
import axios from "axios";


type PropsType = {
    users: UsersType[]
    follow: (id: number, followed: boolean) => void
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: PropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
            props.setUsers(response.data.items))
        // props.setUsers([
        //     {
        //         id: 1,
        //         photo: "https://avatars.mds.yandex.net/i?id=dfdfb66dc782b09172007c5dc7ce548c0fcddc54-9053045-images-thumbs&n=13",
        //         followed: false,
        //         name: 'Egor',
        //         status: "Hello",
        //         location: {city: 'Yaroslavl', country: 'Russia'}
        //     },
        //     {
        //         id: 2,
        //         photo: "https://avatars.mds.yandex.net/i?id=dfdfb66dc782b09172007c5dc7ce548c0fcddc54-9053045-images-thumbs&n=13",
        //         followed: true,
        //         name: 'Julia',
        //         status: "Hello",
        //         location: {city: 'Yaroslavl', country: 'Russia'}
        //     },
        //     {
        //         id: 3,
        //         photo: "https://avatars.mds.yandex.net/i?id=dfdfb66dc782b09172007c5dc7ce548c0fcddc54-9053045-images-thumbs&n=13",
        //         followed: true,
        //         name: 'Buch',
        //         status: "Hello",
        //         location: {city: 'Yaroslavl', country: 'Russia'}
        //     },
        //     {
        //         id: 4,
        //         photo: "https://avatars.mds.yandex.net/i?id=dfdfb66dc782b09172007c5dc7ce548c0fcddc54-9053045-images-thumbs&n=13",
        //         followed: true,
        //         name: 'Lutik',
        //         status: "Hello",
        //         location: {city: 'Yaroslavl', country: 'Russia'}
        //     },
        //     {
        //         id: 5,
        //         photo: "https://avatars.mds.yandex.net/i?id=dfdfb66dc782b09172007c5dc7ce548c0fcddc54-9053045-images-thumbs&n=13",
        //         followed: false,
        //         name: 'Sweta',
        //         status: "Hello",
        //         location: {city: 'Yaroslavl', country: 'Russia'}
        //     },
        // ])
    }


    return (
        <div>
            <div>
                12345
            </div>
            {props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photos.small != null ?el.photos.small : "https://avatars.mds.yandex.net/i?id=f06cfbd960af17ee83248e9edb6212af-3986807-images-thumbs&n=13"} alt="" style={{width: "130px"}}/>
                        </div>
                        <div>
                            <button onClick={() => props.follow(el.id, el.followed)}>
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

