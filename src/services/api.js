const getDataApi = (search) => {
	return fetch('' + search)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
};

export default getDataApi;
