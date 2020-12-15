import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/login/Login";
import EventsContainer from "./components/jogs/EventsContainer";
import JogForm from "./components/jog_form/JogForm";
import InitPage from "./components/login/InitPage";
import Info from "./components/about/Info";
import EmptyPage from "./components/jogs/EmptyPage";
import SignUp from "./components/login/SignUp";
import StageScene from "./components/jogs/stageScene";
import CardForm from "./components/CardForm/CardForm";
import UserCab from "./components/Cabinets/UserCab";
import Admin from "./components/Cabinets/Admin";
import ErrorPage from "./components/utils/errorPage/ErrorPage";

class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <div className={style.appContainer} id={'app-root'}>
                    <Header/>
                    <Route path={'/'} render={() => <InitPage/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/signup'} render={() => <SignUp/>}/>
                    <Route path={'/jogs'} render={() => <EventsContainer/>}/>
                    <Route path={'/events'} render={() => <EventsContainer/>}/>
                    <Route path={'/form'} render={() => <CardForm/>}/>
                    <Route path={'/info'} render={() => <Info/>}/>
                    <Route path={'/user'} render={() => <UserCab/>}/>
                    <Route path={'/admin'} render={() => <Admin/>}/>
                    <Route path={'/scene/:eventId'} render={() => <StageScene/>}/>
                    <Route path={'/error'} render={() => <ErrorPage/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
