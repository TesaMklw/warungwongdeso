// Akun pelanggan bawaan untuk mencoba pemesanan.
export const akunPelanggan = {
	peran: "pelanggan",
	username: "pelanggan",
	password: "pelanggan123",
	nama: "Pelanggan",
	email: "pelanggan@gmail.com",
	telepon: "081234567890",
	alamat: "Jl. Mawar No. 8, Desa Sukamaju",
};

// Akun admin bawaan untuk masuk ke panel kelola warung.
export const akunAdmin = {
	peran: "admin",
	username: "admin",
	password: "123456",
	nama: "Admin Warung",
	email: "admin@warungwongdeso.id",
	telepon: "082122517112",
	alamat: "Warung Wong Deso",
};

// Daftar akun yang bisa dipakai untuk sign in.
const daftarAkun = [akunPelanggan, akunAdmin];

// Mencocokkan username dan password dengan akun yang sudah disediakan.
export function cariAkun(username, password) {
	// Spasi di ujung username diabaikan.
	const nama = username.trim();
	// Mengembalikan akun yang username dan password-nya sama persis.
	return daftarAkun.find(
		(akun) => akun.username === nama && akun.password === password,
	);
}
