import React from 'react';
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from './components/Navbar/Navbar';
import { Route} from "react-router-dom"

import HeaderContainer from "./components/Header/HeaderContainer";

import HomeContainer from "./components/Home/Home";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path="/ " render={() => <HomeContainer/>}/>
                <Route path="/actors" render={() => <UsersContainer/>}/>






            </div>

        </div>
    )
}

export default App;

/*
import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';


import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route, withRouter} from "react-router-dom";

import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();

    }
    render () {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
            <Route path="/profile/:userId?" render={() => <ProfileContainer  />}/>
        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        <Route path="/login" render={() => <LoginPage/>}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Setting}/>

        </div>

        </div>
    )
    }
}
const mapStateToProps = (state) => ({

    initialized: state.app.initialized
})
export default compose (withRouter, connect (mapStateToProps, {initializeApp}))(App);*/
