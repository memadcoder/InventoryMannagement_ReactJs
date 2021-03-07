const routes = {
    home: {
        dashboard:`/`
    },
		drugs: {
			list: `/drugs`,
			form: `/drugs/newentry`
		},
		consumers: {
			list: `/consumers`,
			form: `/consumers/newentry`
		},
		doctors: {
			list: `/doctors`,
			form: `/doctors/newentry`
		},
		pharmacy: {
			list:  `/pharmacy`,
			form: `/pharmacy/newentry`
		}
}

export default routes;