import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import TataLetak from "./components/TataLetak";
import Admin from "./halaman/Admin";
import Beranda from "./halaman/Beranda";
import Galeri from "./halaman/Galeri";
import Masuk from "./halaman/Masuk";
import Menu from "./halaman/Menu";
import Profil from "./halaman/Profil";
import Tentang from "./halaman/Tentang";
import Ulasan from "./halaman/Ulasan";

// Mengumpulkan route. Semua halaman lewat TataLetak.
export default function App() {
	return (
		// Login tersedia di semua halaman.
		<AuthProvider>
			{/* basename mengikuti base URL saat aplikasi dipasang di GitHub Pages. */}
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<Routes>
					{/* Navbar dan footer dipakai bersama oleh route di dalamnya. */}
					<Route element={<TataLetak />}>
						{/* Path kosong menampilkan beranda. */}
						<Route index element={<Beranda />} />
						<Route path="galeri" element={<Galeri />} />
						<Route path="menu" element={<Menu />} />
						<Route path="ulasan" element={<Ulasan />} />
						<Route path="tentang" element={<Tentang />} />
						<Route path="profil" element={<Profil />} />
						<Route path="masuk" element={<Masuk />} />
						<Route path="admin" element={<Admin />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
