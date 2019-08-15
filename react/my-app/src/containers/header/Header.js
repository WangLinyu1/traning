import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '../../assets/images/home.png';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import LaunchIcon from '@material-ui/icons/Launch';
import {connect} from 'react-redux';
import HomeAction from '../../actions/header_action/header_action.js';
import NavBar from '../nav/nav_bar.js'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';



class Header extends React.Component
{
    
    handleClick = (event) => {
      this.props.showRightMenu(event);
    };
    
    handleClose = () => {
      this.props.closeRightMenu();
    };

    handleDrawerOpen=(event) => {
      this.props.showSubList(event)
    };
    handleDrawerClose=() =>{
      this.props.closeSubList()
    };

    loopMenu(content){
        let menu = [];
        for( let i in content)
        {
          menu.push(<a href={content[i].link} key = {content[i].label}target="_blank" rel="noopener noreferrer"><MenuItem key = {content[i].label}>{content[i].label}</MenuItem></a>);
        }
        return(
          <div>
            {menu}
          </div>
        )
    }
    
    
    
    render(){
        const { anchorEl } = this.props;
        const { rightContent } = this.props;
        const { expand } = this.props;
        let output = this.loopMenu(rightContent);
        return (
            <div className = "root">
              
            <AppBar>
              <Toolbar className = "toolbar" >
              <IconButton edge="start"  color="inherit" aria-label="menu" onClick={this.handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
                <div className = "home-icon">
                    <Avatar src = {HomeIcon} />
                </div>
                
                <div className = "rightMenuButton">
                  <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
                    <LaunchIcon />
                  </IconButton>
                </div>
                <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    {output}
                </Menu>


                <Drawer  className = " drawerHeader" open={Boolean(expand)} onClose = {this.handleDrawerClose}>
                  {/* <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton> */}
                    <NavBar/>
                </Drawer>

              </Toolbar>
              
            </AppBar>
            
  
            
        </div>
        )
    }
}
 

const mapStateToProps = (state) =>{
    return{
      anchorEl: state.headerReducer.anchorEl,
      rightContent: state.headerReducer.rightContent,
      expand: state.headerReducer.expand,
    }
  }
  
  const mapDispatchtoProps = (dispatch) =>{
    return{
      showRightMenu: (event) => {dispatch(HomeAction.ShowRightMenu(event))},
      closeRightMenu: () => {dispatch(HomeAction.CloseRightMenu())},
      showSubList: (event)=>{dispatch(HomeAction.ShowSubList(event))},
      closeSubList:()=>{dispatch(HomeAction.CloseSubList())}
    }
  }
  
  
  
  export default connect(mapStateToProps,mapDispatchtoProps)(Header);