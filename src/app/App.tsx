import React, {ComponentType} from "react";
import style from "./App.module.scss";
import {Route, withRouter} from "react-router-dom";
import Navbar from "../features/Navbar/Navbar";
import HeaderContainer from "../features/Header/HeaderContainer";
import Login from "../features/Login/Login";
import DialogsContainer from "../features/Dialogs/DialogsContainer"
import ProfileContainer from "../features/Profile/ProfileContainer";
import UsersContainer from "../features/Users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializedApp} from "./app-reducer";
import {AppStateType} from "./redux-store";
import preload from "../assets/images/Reload.gif";

type MapStateToPropsType ={
    initialized: boolean
}

type PropsType = MapStateToPropsType & {
    setInitializedApp: ()=> void
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setInitializedApp()
    }

    render() {
if (!this.props.initialized){
    return <img src={preload} alt={'preload'}/>
}

        return (
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <div className={style.appWrapperContent}>
                    <Navbar/>
                    <Route
                        path="/dialogs"
                        render={() => (
                            <DialogsContainer
                                // store={props.store}
                            />
                        )}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={() => (
                            <ProfileContainer
                                // store={props.store}
                            />
                        )}
                    />
                    <Route
                        path="/users"
                        render={() => (
                            <UsersContainer
                                // store={props.store}
                            />
                        )}
                    />
                    <Route
                        path="/login"
                        render={() => (
                            <Login
                                // store={props.store}
                            />
                        )}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {setInitializedApp}))(App);

