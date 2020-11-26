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
						title="Link to Alicia Colom LinkedIn"
					>
						{' '}
						Alicia Colom{' '}
					</a>
				</p>
				<a
					className="footer__small"
					href="https://twitter.com/hashtag/PromoKizzy?src=hashtag_click"
					target="_blank"
					title="Link to Twitter hashtag #PromoKizzy"
				>2020 Adalab #PromoKizzy</a>
			</footer>
		</>
	);
};

export default Footer;
