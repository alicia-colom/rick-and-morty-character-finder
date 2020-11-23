import '../stylesheets/Landing.scss';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Footer from './Footer';

const Landing = () => {
	return (
		<>
			<header className="landing">
				<h1>Landing</h1>
			</header>

			<main>
				<Link
					to="/home"
					className="landing__link"
					title="Ir al buscador de Rick y Morty"
				>
					¡Vamos!
				</Link>
				<Loader />
			</main>

			<Footer />
		</>
	);
};

export default Landing;
