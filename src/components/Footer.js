import '../stylesheets/Footer.scss';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<p className="footer__copyright">
					Made with{' '}
					<i className="fa fa-heart footer__copyright--icon" aria-hidden="true"></i>{' '}
					by{' '}
					<a
						className="footer__copyright--author"
						href="https://www.linkedin.com/in/aliciacolomortega/"
						target="_blank"
						title="Enlace a LinkedIn de Alicia Colom"
					>
						{' '}
						Alicia Colom{' '}
					</a>
				</p>
				<a
					className="footer__small"
					href="https://twitter.com/hashtag/PromoKizzy?src=hashtag_click"
					target="_blank"
					title="Enlace al hashtag de Twitter de #PromoKizzy"
				>
					Adalab #PromoKizzy 2020
				</a>
			</footer>
		</>
	);
};

export default Footer;
