import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
// import { NavLink } from 'react-router-dom';
import * as Icons from '@material-ui/icons';
import {connect} from 'react-redux';

class DynamicSideBar extends React.Component
{
    loop_list(content){
        let output = [];
        for( let i in content)
        {
            output.push(this.renderNavItem(content[i]));

        }
        return(
            <div>
                {output}
            </div>
        )
    }
}

export default DynamicSideBar