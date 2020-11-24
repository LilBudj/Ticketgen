import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/login/Login";
import JogContainer from "./components/jogs/JogContainer";
import JogForm from "./components/jog_form/JogForm";
import InitPage from "./components/login/InitPage";
import Info from "./components/about/Info";
import EmptyPage from "./components/jogs/EmptyPage";
import SignUp from "./components/login/SignUp";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className={style.appContainer}>
                    <Header/>
                    <Route path={'/'} render={() => <InitPage/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/signup'} render={() => <SignUp/>}/>
                    <Route path={'/jogs'} render={() => <JogContainer/>}/>
                    <Route path={'/form'} render={() => <JogForm/>}/>
                    <Route path={'/info'} render={() => <Info/>}/>
                    <Route path={'/contact'} render={() => <EmptyPage/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
