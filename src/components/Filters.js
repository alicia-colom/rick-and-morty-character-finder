import '../stylesheets/Filters.scss';

const Filters = (props) => {
	const handleChange = () => {
		console.log('Soy handleChange en Filters.js');
	};

	return (
		<div className="filters">
			<label className="labelSelection" htmlFor="selection">
				Select para filtrar:
			</label>
			<select
				className="selection"
				name="selection"
				id="selection"
				onChange={handleChange}
			>
				<option key={props.filterValue} value="{props.filterValue}">
					uno
				</option>
				<option value="{props.filterValue}">dos</option>
				<option value="{props.filterValue}">tres</option>
			</select>
		</div>
	);
};

export default Filters;
