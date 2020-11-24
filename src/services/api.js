const getDataApi = (search) => {
	return fetch(
		'https://rickandmortyapi.com/documentation/#get-all-characters' + search
	)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
};

export default { getDataApi: getDataApi };
