import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import * as Icons from '@material-ui/icons';
import NavAction from '../../actions/NavAction/navAction.js';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';


class NavBar extends React.Component{
    openSubList(oneState,bool){
        this.props.showSublist(oneState,bool);
    }
    resetTabView = () =>{
      this.props.resetValue();
    };
   

    renderNavItem(node)
    {
      const MyIcon = Icons[node.icon];
      if(node.subNavItems)
      {
        let listItems = this.listLoop(node.subNavItems);
        const expand = this.props.state[node.label] === undefined
                  ? window.location.hash.indexOf(node.url) > -1
                  : this.props.state[node.label];
        this.props.setState(node.label,expand);
          return(
            <div key = {node.label}>
            <NavLink exact = {node.url === '/'} to={node.url} activeClassName="on-click">
              <ListItem button onClick={()=>{this.openSubList(node.label,expand)}}>
                <ListItemIcon>
                  <MyIcon />
                </ListItemIcon>
                <ListItemText primary={node.label} />
                {expand?<Icons.ExpandLess/> : <Icons.ExpandMore/>}
              </ListItem>
              </NavLink>
              <Divider />
              <Collapse in={expand} timeout="auto" unmountOnExit>
              <List component="div">
               {listItems}
              </List>
              </Collapse>
  
            </div>
        );
      }
      else
      {
        return(
          <div key={node.label}>
            <NavLink exact = {node.url === '/'} to={node.url} activeClassName="on-click">
              <ListItem button onClick = {this.resetTabView}>
                <ListItemIcon>
                  <MyIcon />
                </ListItemIcon>
                <ListItemText primary={node.label} />
              </ListItem>
              </NavLink>
            <Divider />
          </div>
        );
      }
  
    }
  
    listLoop(list)
    {
      let output = [];
      for(let i in list)
      {
        output.push(this.renderNavItem(list[i]));
      }
      return(
        <div>
        {output}
        </div>
      );
    }
    
    render()
    {
      const { data } = this.props;
      return(
        <div>
          {this.listLoop(data)}
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) =>{
    return{
      data: state.navReducer.data,
      state: state.navReducer
    }
  }
  
  const mapDispatchtoProps = (dispatch) =>{
    return{
      showSublist: (oneState) => {dispatch(NavAction.ShowSublist(oneState))},
      setState: (oneState,bool) => {dispatch(NavAction.SetState(oneState, bool))},
      resetValue: () => {dispatch(NavAction.ResetValue())}
    }
  }
  
  export default connect(mapStateToProps,mapDispatchtoProps)(NavBar);