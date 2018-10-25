import api from '../../api/imgur'; // Cuando sólo hay un export, se puede llamar como lo llamas aquí!?
import qs from 'qs';

const state = {
	token: null
};

const getters = {
	isLoggedIn: state => !!state.token
};

const actions = {
	login: () => {
		api.login();

	},
	finalizeLogin({ commit }, hash) {
		const query = qs.parse(hash.replace('#', ''));

		commit('setToken', query.access_token);
	},
	logout: ({ commit }) => {
		commit('setToken', null);
	}
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	} 
};

export default {
	state,
	getters,
	actions,
	mutations
};