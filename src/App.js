import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path='/' component={Dashboard} exact />
					<Route path='/project/:id' component={ProjectDetails} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SignUp} />
				</Switch>
			</div>
		</BrowserRouter >
	);
}

export default App;