import { createContext, useContext, useMemo, useState } from "react";
import { cariAkun } from "../data/akun";

// Nama kunci penyimpanan sesi login di localStorage.
const KUNCI_SESI = "warung-wong-deso-sesi";
// Context kosong. Nilainya diisi oleh AuthProvider.
const AuthContext = createContext(null);

// Membaca sesi dari localStorage. Data rusak dianggap belum login.
function bacaSesi() {
	// localStorage tidak ada saat kode berjalan di luar browser.
	if (typeof window === "undefined") return null;
	try {
		// Mengambil teks sesi yang tersimpan.
		const mentah = window.localStorage.getItem(KUNCI_SESI);
		// Mengubah JSON menjadi objek. Teks kosong berarti belum login.
		return mentah ? JSON.parse(mentah) : null;
	} catch {
		// JSON tidak valid dianggap belum login.
		return null;
	}
}

// Menghapus password sebelum sesi disimpan.
function tanpaSandi(akun) {
	// Menyalin akun agar data asli tidak berubah.
	const sesi = { ...akun };
	// Password tidak ikut tersimpan di browser.
	delete sesi.password;
	return sesi;
}

// Menyimpan state login agar halaman lain bisa memakainya lewat useAuth.
export function AuthProvider({ children }) {
	// State awal diambil dari sesi yang sudah tersimpan.
	const [pengguna, setPengguna] = useState(bacaSesi);

	// Nilai context dihitung ulang hanya saat data pengguna berubah.
	const nilai = useMemo(() => {
		// Mencocokkan username dan password, lalu menyimpan sesi.
		function masuk(username, password) {
			// Mencari akun yang username dan password-nya cocok.
			const akun = cariAkun(username, password);
			// Login gagal jika akun tidak ditemukan.
			if (!akun) {
				return { ok: false, pesan: "Username atau password salah." };
			}

			// Menyiapkan data sesi tanpa password.
			const sesi = tanpaSandi(akun);
			// Menyimpan sesi agar login tetap ada setelah refresh.
			window.localStorage.setItem(KUNCI_SESI, JSON.stringify(sesi));
			// Menghapus tanda login admin versi lama.
			window.localStorage.removeItem("warung-wong-deso-admin-login");
			// Memperbarui state agar tampilan langsung berubah.
			setPengguna(sesi);
			return { ok: true, pengguna: sesi };
		}

		// Menghapus sesi dan mengembalikan pengguna sebagai tamu.
		function keluar() {
			window.localStorage.removeItem(KUNCI_SESI);
			window.localStorage.removeItem("warung-wong-deso-admin-login");
			// Mengosongkan state login.
			setPengguna(null);
		}

		return { pengguna, masuk, keluar };
	}, [pengguna]);

	// Membagikan nilai login ke seluruh komponen di dalamnya.
	return <AuthContext.Provider value={nilai}>{children}</AuthContext.Provider>;
}

// Mengambil pengguna, masuk, dan keluar. Dipakai di dalam AuthProvider.
export function useAuth() {
	const konteks = useContext(AuthContext);
	// Melempar error jika hook dipakai di luar provider.
	if (!konteks) {
		throw new Error("useAuth harus dipakai di dalam AuthProvider.");
	}
	return konteks;
}
