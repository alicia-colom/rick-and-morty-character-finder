import '../stylesheets/Landing.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
	return (
		<>
			<Header />

			<main className="landing">
				<h1 className="landing__title">
					Busca tu personaje favorito de Rick y Morty
				</h1>
				<Link
					to="/home"
					className="landing__link"
					title="Ir al buscador de Rick y Morty"
				>
					¡Vamos!
				</Link>
			</main>

			<Footer />
		</>
	);
};

export default Landing;
