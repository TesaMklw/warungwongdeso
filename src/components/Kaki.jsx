import { Container } from "react-bootstrap";

// Menampilkan footer berisi hak cipta serta kontak email dan telepon.
export default function Kaki() {
	return (
		<footer className="site-footer">
			<Container>
				<div className="footer-bottom-row">
					<p className="copyright">© 2026 Warung Wong Deso</p>
					<div className="footer-right">
						<a href="mailto:manganlur@gmail.com">manganlur@gmail.com</a>
						<span className="divider">|</span>
						<a href="tel:+6282122517112">+6282122517112</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}

