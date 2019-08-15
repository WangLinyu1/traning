import React from 'react';
import Header from "./header/Header.js"
import Footer from "./footer/Footer.js"
import AppAction from '../actions/AppAction/appAction.js'
import {connect} from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';

import MyHome from '../components/content/Home/home.js';
import MyColor from '../components/content/Colors/colors.js';
import MyAvatar from '../components/content/Components/Avatar/avatar.js';



class App extends React.Component
{
  handleNavOpen = () =>{
    this.props.leftMenuOpen();
  };
  
  render(){
    return(
      <HashRouter >
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.leftOpen}/>
         </div>
         <div className = "content">
         <Switch>
          <Route path = "/" component = {MyHome}  key = "/home" exact/>
          <Route path = "/my-app" component = {MyHome} key = "/my-app" exact/>
          <Route path = "/colors" component = {MyColor} key = "/colors"/>
          <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>

         
         </Switch>
         </div>
      </div>
      </HashRouter>
    )
  }

}



const mapStateToProps = (state) =>{
  return{
    leftOpen: state.appReducer.leftOpen,
    data: state.appReducer.data
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    leftMenuOpen: () => {dispatch(AppAction.LeftMenuOpen())},
  }
}


export default connect(mapStateToProps,mapDispatchtoProps)(App);
