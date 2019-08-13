import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root_reducer.js';

const store = createStore(rootReducer);


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// fetch('http://www.mocky.io/v2/5cfc4b5c3000006f240a8c7d').then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   })
//   .catch(function() {
//   	console.log("error") 
// 	}
//   )
// ;
// cd /mnt/c/Users/49125/OneDrive/桌面/traning/react/my-app

serviceWorker.register();
