import '../stylesheets/NotResults.scss';
import imgNotResults from '../images/Rick-Morty_men-in-black.png';

const NotResults = (props) => {
	return (
		<>
			<h2>There is nothing in here</h2>
			<img
				src={imgNotResults}
				alt="Rick and Morty keep driving"
				className="imgNotResults"
			/>
			<h2>Keep browsing</h2>
		</>
	);
};

export default NotResults;
