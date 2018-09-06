import React from 'react';
import ReactDOM from 'react-dom';

import  '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
