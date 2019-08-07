import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

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


serviceWorker.register();
