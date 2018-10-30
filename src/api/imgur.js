import qs from 'qs';

const CLIENT_ID = '7cc70dcfca6514b';
const ROOT_URL = 'https://api.imgur.com'

// secret: 96a8457c9e0d906e82eb406a9d61c29637a4a07f

export default {
	login() {
		const queryString = {
			client_id: CLIENT_ID,
			response_type: 'token'
		};

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
	}
}; 