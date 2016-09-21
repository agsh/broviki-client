import AppDispatcher from '../dispatchers/app';
import {LOGIN_USER, LOGOUT_USER} from '../constants/auth';
import RouterContainer from '../services/router';

export default {
	loginUser: (jwt) => {
		var savedJwt = localStorage.getItem('jwt');

		AppDispatcher.dispatch({
			actionType: LOGIN_USER,
			jwt: jwt
		});

		if (savedJwt !== jwt) {
			var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

			RouterContainer.get().transitionTo(nextPath);
			localStorage.setItem('jwt', jwt);
		}
	},
	logoutUser: () => {
		RouterContainer.get().transitionTo('/login');
		localStorage.removeItem('jwt');
		AppDispatcher.dispatch({
			actionType: LOGOUT_USER
		});
	}
}