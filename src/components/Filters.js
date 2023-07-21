import '../stylesheets/Filters.scss';

const Filters = (props) => {
	const handleChangeStatus = (ev) => {
		const statusValue = ev.target.value;
		return props.handleFilterStatus(statusValue);
	};

	const handleClickGender = (ev) => {
		const genderValue = ev.target.value;
		return props.handleFilterGender(genderValue);
	};

	const handleChangeSort = (ev) => {
		const isSort = ev.target.checked;
		return props.handleSort(isSort);
	};

	// Filtro para species I:
	// const specieFullList = props.initialList.map(
	// 	(eachCharacter) => eachCharacter.species
	// );
	// let specieList = [];
	// specieList = specieFullList.filter((eachSpecie, i) => {
	// 	console.log(specieList);
	// 	return eachSpecie !== specieFullList[i + 1] &&
	// 		eachSpecie !== specieFullList[i + 2]
	// 		? specieList.push(eachSpecie) && (
	// 				<option key={eachSpecie.i} value={eachSpecie}>
	// 					{eachSpecie}
	// 				</option>
	// 		  )
	// 		: i + 1;
	// });

	// Filtro para species II:
	// let specieList = list;
	// const list = props.initialList.filter((each, i) => {
	// 	return each.species === props.initialList[i].species
	// 		? specieList.push(each)
	// 		: i + 1;
	// });

	// // Filtro para species III:
	// const specieList = props.resultList.map((eachCharacter) => (
	// 	<option key={eachCharacter.id} value={eachCharacter.species}>
	// 		{eachCharacter.species}
	// 	</option>
	// ));

	// const handleChangeSpecie = (ev) => {
	// 	console.log('filtro por specie', ev.target.value);
	// 	const specieValue = ev.target.value;
	// 	return props.handleFilterSpecie(specieValue);
	// };

	return (
		<form className="filter">
			<fieldset className="filter__fieldset gender">
				<div className="gender__block">
					<div>
						<input
							type="radio"
							id="female"
							name="gender"
							value="female"
							onChange={handleClickGender}
						/>
						<label htmlFor="female">Female</label>
					</div>
					<div>
						<input
							type="radio"
							id="male"
							name="gender"
							value="male"
							onChange={handleClickGender}
						/>
						<label htmlFor="male">Male</label>
					</div>
				</div>
				<div className="gender__block">
					<div>
						<input
							type="radio"
							id="unknown"
							name="gender"
							value="unknown"
							onChange={handleClickGender}
						/>
						<label htmlFor="unknown">Other</label>
					</div>
					<div>
						<input
							type="radio"
							id="all"
							name="gender"
							value="all"
							onChange={handleClickGender}
						/>
						<label htmlFor="all">All</label>
					</div>
				</div>
			</fieldset>

			{/* <fieldset className="filter__fieldset">
				<label htmlFor="specie">Species: </label>
				<select
					className="filter__select"
					name="specie"
					id="specie"
					onChange={handleChangeSpecie}
				>
					<option value="All">All</option>
					{specieList}
				</select>
			</fieldset> */}

			<fieldset className="filter__fieldset">
				<label className="filter__fieldset--sort" htmlFor="sort">
					Sort by name
				</label>
				<label className="filter__fieldset--sortAZ" htmlFor="sort">
					Sort A-Z
				</label>
				<input
					type="checkbox"
					id="sort"
					name="sort"
					value="isSort"
					onChange={handleChangeSort}
				/>
			</fieldset>
		</form>
	);
};

export default Filters;
