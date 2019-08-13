import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/images/home.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import HomeAction from '../../actions/header_action/header_action.js';
// import DynamicSideBar from '../nav/side_bar.js'



class Header extends React.Component
{
    handleClick = (event) => {
        this.props.showRightMenu(event);
    };
    
    handleClose = () => {
      this.props.closeRightMenu();
    };

    loopMenu(content){
        let menu = [];
        for( let i in content)
        {
            menu.push(<a href={content[i].link} key = {content[i].name}target="_blank" rel="noopener noreferrer"><MenuItem key = {content[i].name}>{content[i].name}</MenuItem></a>);
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
        let output = this.loopMenu(rightContent);
        return (
            <div className = "root">
            <AppBar>
              <Toolbar className = "toolbar">
                <div>    
                <ListItem >
                  <ListItemIcon  >
                    <MenuIcon />
                  </ListItemIcon>
                </ListItem>
                </div>
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
              </Toolbar>
            </AppBar>
            {/* <div>
              <List>
                <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
                  <div className="list">
                  <List component="div">
                    <DynamicSideBar/>
                  </List>
                  </div>
                </Collapse>
              </List>
          </div> */}
        </div>
        )
    }
}
 

const mapStateToProps = (state) =>{
    return{
      anchorEl: state.headerReducer.anchorEl,
      rightContent: state.headerReducer.rightContent
    }
  }
  
  const mapDispatchtoProps = (dispatch) =>{
    return{
      showRightMenu: (event) => {dispatch(HomeAction.ShowRightMenu(event))},
      closeRightMenu: () => {dispatch(HomeAction.CloseRightMenu())}
    }
  }
  
  
  
  export default connect(mapStateToProps,mapDispatchtoProps)(Header);