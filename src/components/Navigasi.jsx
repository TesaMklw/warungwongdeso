import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

// Tautan navbar selain Beranda dan Tentang Kami.
const tautan = [
	{ ke: "/galeri", label: "Galeri" },
	{ ke: "/menu", label: "Menu" },
	{ ke: "/ulasan", label: "Ulasan" },
	{ ke: "/profil", label: "Profil" },
];

// Bagian dalam halaman Tentang yang bisa dibuka dari dropdown.
const menuTentang = [
	{ ke: "/tentang#profil", hash: "#profil", label: "Profil" },
	{ ke: "/tentang#lokasi", hash: "#lokasi", label: "Lokasi" },
	{ ke: "/tentang#kontak", hash: "#kontak", label: "Kontak" },
];

// Menampilkan navbar atas, tautan halaman, serta tombol masuk atau keluar.
export default function Navigasi() {
	const { pathname, hash } = useLocation();
	const { pengguna, keluar } = useAuth();

	return (
		<Navbar expand="lg" sticky="top" className="site-header">
			<Container>
				<Navbar.Brand as={Link} to="/" className="brand">
					<span className="brand-mark">WD</span>
					<span>
						<strong>Warung Wong</strong>
						<small> DESO</small>
					</span>
				</Navbar.Brand>
				<div className="nav-aksi">
					{/* Pengguna yang sudah login melihat tombol keluar. */}
					{pengguna ? (
						<Button
							type="button"
							variant="outline-primary"
							className="btn-nav btn-garis"
							onClick={keluar}
						>
							Keluar
						</Button>
					) : (
						<Button as={Link} to="/masuk" className="btn-nav">
							Sign In / Sign Up
						</Button>
					)}
					<Navbar.Toggle aria-controls="navigasi-utama" />
				</div>
				<Navbar.Collapse id="navigasi-utama">
					<Nav className="ms-lg-auto align-items-lg-center">
						<Nav.Link as={NavLink} to="/" end>
							Beranda
						</Nav.Link>
						<Dropdown className="nav-item nav-tentang">
							{/* Tautan utama Tentang Kami, panah di samping membuka bagian halaman. */}
							<Nav.Link as={NavLink} to="/tentang">
								Tentang Kami
							</Nav.Link>
							<Dropdown.Toggle
								variant="link"
								id="menu-tentang"
								className="nav-tentang-panah"
								aria-label="Buka bagian Tentang Kami"
							/>
							<Dropdown.Menu renderOnMount>
								{menuTentang.map((item) => (
									<Dropdown.Item
										key={item.ke}
										as={Link}
										to={item.ke}
										active={pathname === "/tentang" && hash === item.hash}
									>
										{item.label}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
						{tautan.map((item) => (
							<Nav.Link key={item.ke} as={NavLink} to={item.ke}>
								{item.label}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
