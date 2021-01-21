// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';

const App: React.FC = () => {
	return (
		<Router>
			<AppProvider>
				<Routes />
			</AppProvider>

			<GlobalStyle />
		</Router>
	);
};

export default App;
