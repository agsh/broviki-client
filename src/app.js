import React from 'react';
import Router, {Route} from 'react-router';
import AuthApp from './components/app';
import RouterContainer from './services/router';

const routes = (
	<Route handler={AuthApp}>
		<Route name="login" handler={Login}/>
		<Route name="signup" handler={Signup}/>
		<Route name="home" path="/" handler={Home}/>
		<Route name="quote" handler={Quote}/>
	</Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
	LoginActions.loginUser(jwt);
}

router.run(function(Handler) {
	React.render(<Handler />, document.getElementById('content'));
});