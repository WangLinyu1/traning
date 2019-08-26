import React from 'react';
import Paper from '@material-ui/core/Paper';

class MyHome extends React.Component
{
  render(){
    return (
      <Paper className = "home" elevation = {20}>
        <div>
        <h1 className = "title">Welcome</h1>
        </div>
        <br/>
        <div className = "text">
          <h1>This is my personal Material-UI and React design reference website, built by React-Redux and Material-UI. </h1>
          <br/>
          <h1>This website includes color design reference, Material-UI component demos, char demos generated by React-vis, and an icon library. Each demo comes with sample code usage. Click left meun to check details. Right menu directs to exteral reference websites.</h1>
          <br/>
          <h1>Material Design is a design language that Google developed in 2014. Expanding on the "card" motifs that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.</h1>
          <br/>
          <h1>React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies</h1>
          <br/>
          <h1>React-vis is a React visualization library. React-vis components are designed to work just like other React components. If you can work with React components, you can work with React-Vis.</h1>
        </div>
      </Paper>
    )
  }
}

export default MyHome
