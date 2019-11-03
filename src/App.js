import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';


import { Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";


import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import HomeContainer from "./components/Home/Home";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/home" render={() => <HomeContainer/>}/>
                <Route path="/posts" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer  />}/>


                <Route path="/login" render={() => <LoginPage/>}/>


            </div>

        </div>
    )
}

export default App;