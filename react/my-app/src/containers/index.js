import React from 'react';
import Header from "./header/Header.js"
import Footer from "./footer/Footer.js"
import AppAction from '../actions/AppAction/appAction.js'
import {connect} from 'react-redux';


class App extends React.Component
{
  handleNavOpen = () =>{
    this.props.leftMenuOpen();
  };
  
  render(){
    return(
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.leftOpen}/>
         </div>
      </div>
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
