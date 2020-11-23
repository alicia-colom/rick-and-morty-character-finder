import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
