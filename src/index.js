import React from 'react';
import ReactDOM from 'react-dom';
import './css/putevimaistine.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PutevimaIstine from './putevimaistine';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PutevimaIstine />, document.getElementById('putevimaistine'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://   .ly/CRA-PWA
serviceWorker.unregister();
