import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

///Supeer necessário para SPA
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

unregister();

