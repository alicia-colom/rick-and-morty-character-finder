import '../stylesheets/Filters.scss';

const Filters = (props) => {
	const handleChangeStatus = (ev) => {
		console.log('filtro por status', ev.target.value);
	};

	const handleClickGender = (ev) => {
		console.log('filtro por gender', ev.target.value);
	};

	// Filtro para species
	const specieList = props.resultList.map((eachCharacter) => (
		<option key={eachCharacter.id} value={eachCharacter.species}>
			{eachCharacter.species}
		</option>
	));

	const handleChangeSpecie = (ev) => {
		console.log('filtro por specie', ev.target.value);
	};

	return (
		<form className="filter">
			<fieldset className="filter__fieldset">
				<label className="filter__status--label" htmlFor="status">
					Status:{' '}
				</label>
				<select
					className="filter__status--select"
					name="status"
					id="status"
					onChange={handleChangeStatus}
				>
					<option value="Alive">Alive</option>
					<option value="Dead">Dead</option>
					<option value="unknown">unknown</option>
				</select>
			</fieldset>

			<fieldset className="filter__fieldset">
				<label htmlFor="Female">Female</label>
				<input
					type="radio"
					id="Female"
					name="gender"
					value="Female"
					onChange={handleClickGender}
				/>
				<label htmlFor="Male">Male</label>
				<input
					type="radio"
					id="Male"
					name="gender"
					value="Male"
					onChange={handleClickGender}
				/>
				<label htmlFor="unknown">unknown</label>
				<input
					type="radio"
					id="unknown"
					name="gender"
					value="unknown"
					onChange={handleClickGender}
				/>
			</fieldset>
			<fieldset className="filter__fieldset">
				<label className="filter__specie--label" htmlFor="specie">
					Species:{' '}
				</label>
				<select
					className="filter__specie--select"
					name="specie"
					id="specie"
					onChange={handleChangeSpecie}
				>
					{specieList}
				</select>
			</fieldset>
		</form>
	);
};

export default Filters;
