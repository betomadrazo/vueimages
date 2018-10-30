<template>
	<div>
		<AppHeader></AppHeader>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios';

import AppHeader from './components/AppHeader';

export default {
	name: 'App',
	components: {
		AppHeader
	},
	created() {
		alert("lkfds");
	},
};
</script>