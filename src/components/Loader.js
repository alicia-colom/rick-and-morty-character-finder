import '../stylesheets/Loader.scss';
import LoadingImg from '../images/loader-point.gif'


const Loader = () => {
	return (
		<div className="loader">
			<img className="loader__img" src={LoadingImg} alt="Loading animation" />
		</div>
	);
};

export default Loader;
