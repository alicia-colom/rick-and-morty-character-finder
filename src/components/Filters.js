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

	return (
		<form className="filter">
			<fieldset className="filter__fieldset">
				<label htmlFor="status">Status: </label>
				<select
					className="filter__select"
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
					className="filter__gender"
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
		</form>
	);
};

export default Filters;
