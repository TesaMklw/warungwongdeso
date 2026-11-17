import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Kaki from "./Kaki";
import Navigasi from "./Navigasi";

// Menyusun navbar, isi halaman, dan footer.
export default function TataLetak() {
	// pathname untuk route aktif, hash untuk bagian dalam halaman Tentang.
	const { pathname, hash } = useLocation();
	const { pengguna } = useAuth();
	// Navbar disembunyikan hanya saat admin membuka panel.
	const panelAdmin = pathname === "/admin" && pengguna?.peran === "admin";

	// Scroll ke bagian hash. Jika tidak ada hash, kembali ke atas halaman.
	useEffect(() => {
		if (hash) {
			// Mencari elemen yang id-nya sama dengan hash.
			const bagian = document.querySelector(hash);
			if (bagian) {
				bagian.scrollIntoView({ behavior: "smooth", block: "start" });
				return;
			}
		}
		// Halaman baru selalu dimulai dari atas.
		window.scrollTo(0, 0);
	}, [pathname, hash]);

	return (
		<>
			{/* Navbar tidak tampil di dalam panel admin. */}
			{!panelAdmin && <Navigasi />}
			{/* Isi route aktif. */}
			<main className="isi-halaman">
				<Outlet />
			</main>
			<Kaki />
		</>
	);
}
