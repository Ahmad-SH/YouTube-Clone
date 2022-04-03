import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthProvider from './AuthContext/AuthContext'
ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));
