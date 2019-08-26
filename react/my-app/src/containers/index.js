import React from 'react';
import Header from "./header/Header.js"
import Footer from "./footer/Footer.js"
import AppAction from '../actions/AppAction/appAction.js'
import {connect} from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';

import MyHome from '../components/content/Home/home.js';
import MyColor from '../components/content/Colors/colors.js';
import MyAvatar from '../components/content/Components/Avatar/avatar.js';
import MyButtons from '../components/content/Components/Buttons/buttons.js';
import MyTables from '../components/content/Components/Tables/tables.js';
import MyTabs from '../components/content/Components/Tabs/tabs.js';
import MySpinner from '../components/content/Components/Spinner/spinner.js';
import MyInfoCard from '../components/content/Components/InfoCard/infoCard.js';
import MyChips from '../components/content/Components/Chips/chips.js';
import MyProgress from '../components/content/Components/Progress/progress.js';
import MyMessageBar from '../components/content/Components/MessageBar/messageBar.js';
import MyDialog from '../components/content/Components/Dialog/dialog.js';
import MyNotification from '../components/content/Components/Notification/notification.js';
import MySearchField from '../components/content/Components/SearchField/searchField.js';
import MyNestedList from '../components/content/Components/NestedList/nestedList.js';
import MyLine from '../components/content/Charts/Line/line.js';
import MyCircularGridLine from'../components/content/Charts/CircularGridLine/circularGridLine.js';
import MyHorizontalBar from '../components/content/Charts/HorizontalBar/horizontalBar.js';
import MyVerticalBar from '../components/content/Charts/VerticalBar/verticalBar.js';
import MyStackedBar from '../components/content/Charts/StackedBar/stackedBar.js';
import MyArea from '../components/content/Charts/Area/area.js';
import MyPie from '../components/content/Charts/Pie/pie.js';
import MyHeatmap from '../components/content/Charts/Heatmap/heatmap.js';
import MyLineMark from '../components/content/Charts/LineMark/lineMark.js';
import MyScatterplot from '../components/content/Charts/Scatterplot/scatterplot.js';
import MyMarkdown from '../components/content/Components/Markdown/markdown.js';
import MyPanel from '../components/content/Components/Panel/panel.js';
import MyIconography from '../components/content/Iconography/iconograpy.js';



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
          <Route path = "/components/button" component = {MyButtons} key = "/components/button"/>
          <Route path = "/components/table" component = {MyTables} key = "/components/table"/>
          <Route path = "/components/tabs" component = {MyTabs} key = "/components/tabs"/>
          <Route path = "/components/spinner" component = {MySpinner} key = "/components/spinner"/>
          <Route path = "/components/progress" component = {MyProgress} key = "/components/progress"/>
          <Route path = "/components/infocard" component = {MyInfoCard} key = "/components/infocard"/>
          <Route path = "/components/messagebar" component = {MyMessageBar} key = "/components/messagebar"/>
          <Route path = "/components/dialog" component = {MyDialog} key = "/components/dialog"/>
          <Route path = "/components/chips" component = {MyChips} key = "/components/chips"/>
          <Route path = "/components/notification" component = {MyNotification} key = "/components/notification"/>
          <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>
          <Route path = "/components/searchfield" component = {MySearchField} key = "/components/searchfield"/>
          <Route path = "/components/markdown" component = {MyMarkdown} key = "/components/markdown"/>
          <Route path = "/components/panel" component = {MyPanel} key = "/components/panel"/>
          <Route path = "/components/nestedlist" component = {MyNestedList} key = "/components/nestedlist"/>
          <Route path = "/charts/line" component = {MyLine} key = "/charts/line"/>
          <Route path = "/charts/linemark" component = {MyLineMark} key = "/charts/linemark"/>
          <Route path = "/charts/horizontalbar" component = {MyHorizontalBar} key = "/charts/horizontalbar"/>
          <Route path = "/charts/circulargridline" component = {MyCircularGridLine} key = "/charts/circulargridline"/>
          <Route path = "/charts/verticalbar" component = {MyVerticalBar} key = "/charts/verticalbar"/>
          <Route path = "/charts/stackbar" component = {MyStackedBar} key = "/charts/stackbar"/>
          <Route path = "/charts/area" component = {MyArea} key = "/charts/area"/>
          <Route path = "/charts/pie" component = {MyPie} key = "/charts/pie"/>
          <Route path = "/charts/scatterplot" component = {MyScatterplot} key = "/charts/scatterplot"/>
          <Route path = "/charts/heatmap" component = {MyHeatmap} key = "/charts/heatmap"/>
          <Route path = "/icons" component = {MyIconography} key = "/icons"/>

          {/* <Route  component = {Error} key = "error"/> */}
         </Switch>
         </div>
         <div className = "footer-position">
          <Footer />
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
