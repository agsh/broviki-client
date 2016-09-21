'use strict';

import {LOGIN_URL, SIGNUP_URL} from '../constants/auth';
import LoginActions from '../actions/LoginActions';

class AuthService {

	login(username, password) {
		return this.handleAuth({
			url: LOGIN_URL
			, body: {
				username, password
			}
		});
	}

	logout() {
		LoginActions.logoutUser();
	}

	signup(username, password, extra) {
		return this.handleAuth({
			url: SIGNUP_URL
			, body: {
				username, password, extra
			}
		});
	}

	handleAuth({url, body}) {
		return fetch(url, {
			body
			, mode: 'cors'
			, method: 'POST'
			, cache: 'no-cache'
		})
			.then(function(response) {
				console.log(response.headers.get('Content-Type'));
				console.log(response.status);

				return response.json();
			})
			.then(function(json) {
				/*var jwt = response.id_token;
				LoginActions.loginUser(jwt);
				return true;*/
				console.log(json); // iliakan
			})
			.catch(console.error);
	}
}

export default new AuthService();