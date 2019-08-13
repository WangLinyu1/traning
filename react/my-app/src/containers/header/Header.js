import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/images/home.png';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import LaunchIcon from '@material-ui/icons/Launch';
import {connect} from 'react-redux';
import HomeAction from '../../actions/header_action/header_action.js';
// import DynamicSideBar from '../nav/side_bar.js'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



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
    sublist(content){
      let L = [];
      for(let i in content){
        L.push(<a href={content[i].url} key = {content[i].label}target="_blank" rel="noopener noreferrer"><ListItem key = {content[i].label}>{content[i].label}</ListItem></a>);
      
      }
      console.log(L)
      return(
          <List>
          {L}
          </List>

      ) 
    }
    looplist(content){
      let L = [];
      for(let i in content){
        L.push(<a href={content[i].url} key = {content[i].label}target="_blank" rel="noopener noreferrer"><ListItem key = {content[i].label}>{content[i].label}</ListItem></a>);
        console.log()
        if(content[i].subNavItems){
          
        }
      }
      console.log(L)
      return(
          <List>
          {L}
          </List>

      ) 
    }
    
    
    render(){
        const { anchorEl } = this.props;
        const { rightContent } = this.props;
        const { expand } = this.props;
        const { navItems } = this.props;
        let output = this.loopMenu(rightContent);
        let nav_list = this.loopMenu(navItems)
        console.log(nav_list)
        // let nav_list = this.loopMenu()
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
                <div className = "left_border title_color">
                    <h2>system design</h2>
                </div>
                <div className = "rightMenuButton">
                  <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
                    <LaunchIcon />
                  </IconButton>
                </div>
                <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    {output}
                </Menu>


                <Drawer  className = " drawerHeader" open={Boolean(expand)} variant="persistent">
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronRightIcon />
                  </IconButton>
                  {nav_list}
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
      navItems:state.headerReducer.navItems
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