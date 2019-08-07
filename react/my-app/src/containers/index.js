import React from 'react';
import {  Icons,Table, Button } from '../componets/';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const Icon = Icons.AccessAlarm;


function App() {
  return (
    <div className="App">
      <Icon/>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Table>
        A
        B
        C
      </Table>
    </div>
  );
}



export default App;
