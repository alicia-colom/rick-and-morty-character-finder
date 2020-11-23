import '../stylesheets/filter.scss';

const Filter = (props) => {
	const handleChange = () => {
		console.log('Soy handleChange en filter');
	};

	return (
		<div className="filter">
			<label className="labelSelection" htmlFor="selection">
				Select para filtrar:
			</label>
			<select
				classname="selection"
				name="selection"
				id="selection"
				onChange={handleChange}
			>
				<option key={props.filterValue} value="{props.filterValue}">uno</option>
				<option value="{props.filterValue}">dos</option>
				<option value="{props.filterValue}">tres</option>
			</select>
		</div>
	);
};

export default Filter;
