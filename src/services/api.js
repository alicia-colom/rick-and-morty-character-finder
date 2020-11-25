const getDataApi = (search) => {
	return fetch('https://rickandmortyapi.com/api/character/?name=' + search)
		.then((response) => response.json())
		.then((dataApi) => {
			return dataApi;
		});
};

export default getDataApi;
