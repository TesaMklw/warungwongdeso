// Mengubah angka menjadi format rupiah, misalnya 15000 menjadi Rp 15.000.
export function formatRupiah(nilai) {
	// id-ID memakai titik sebagai pemisah ribuan.
	return `Rp ${nilai.toLocaleString("id-ID")}`;
}

// Daftar menu bawaan, dikelompokkan menurut kategori.
export const kelompokMenu = [
	// Makanan utama warung.
	{
		nama: "Menu Utama",
		item: [
			{
				id: "nila-goreng-bakar",
				nama: "Ikan Nila Saja",
				keterangan: "Nila Goreng / Bakar, sambal, lalapan",
				harga: 25000,
			},
			{
				id: "nasi-nila-goreng-bakar",
				nama: "Nasi + Ikan Nila",
				keterangan: "Nasi Uduk / Biasa, Nila Goreng / Bakar, sambal, lalapan",
				harga: 30000,
			},
			{
				id: "ayam-kremes",
				nama: "Ayam Kremes",
				keterangan: "Ayam ungkep, kremes, sambal, lalapan",
				harga: 17000,
			},
			{
				id: "nasi-ayam-kremes",
				nama: "Nasi + Ayam Kremes",
				keterangan: "Nasi Uduk / Biasa, ayam kremes, sambal, lalapan",
				harga: 22000,
			},
			{
				id: "ayam-bakar",
				nama: "Ayam Bakar",
				keterangan: "Ayam bakar, sambal, lalapan",
				harga: 17000,
			},
			{
				id: "nasi-ayam-bakar",
				nama: "Nasi + Ayam Bakar",
				keterangan: "Nasi Uduk / Biasa, ayam bakar, sambal, lalapan",
				harga: 22000,
			},
			{
				id: "lele-goreng-bakar",
				nama: "Ikan Lele Saja",
				keterangan: "Lele goreng / bakar, sambal, lalapan",
				harga: 13000,
			},
			{
				id: "nasi-lele-bakar",
				nama: "Nasi + Ikan Lele",
				keterangan: "Nasi Uduk / Biasa, Lele goreng / bakar, sambal, lalapan",
				harga: 18000,
			},
			{
				id: "bebek-goreng-bakar",
				nama: "Bebek Saja",
				keterangan: "Bebek goreng / bakar, sambal, lalapan",
				harga: 30000,
			},
			{
				id: "nasi-bebek-goreng-bakar",
				nama: "Nasi + Bebek",
				keterangan: "Nasi Uduk / Biasa, Bebek goreng / bakar, sambal, lalapan",
				harga: 35000,
			},
			{
				id: "nasi-goreng-biasa",
				nama: "Nasi Goreng Biasa",
				keterangan: "",
				harga: 15000,
			},
			{
				id: "nasi-goreng-ayam",
				nama: "Nasi Goreng Ayam",
				keterangan: "",
				harga: 20000,
			},
			{
				id: "nasi-goreng-spesial",
				nama: "Nasi Goreng Spesial",
				keterangan: "",
				harga: 25000,
			},
			{
				id: "nasi-goreng-gila",
				nama: "Nasi Goreng Gila",
				keterangan: "",
				harga: 20000,
			},
			{
				id: "nasi-gila",
				nama: "Nasi Gila",
				keterangan: "",
				harga: 15000,
			},
			{
				id: "mie-goreng-biasa",
				nama: "Mie Goreng Biasa",
				keterangan: "",
				harga: 15000,
			},
			{
				id: "mie-goreng-ayam",
				nama: "Mie Goreng Ayam",
				keterangan: "",
				harga: 18000,
			},
			{
				id: "bihun-goreng-kuah",
				nama: "Bihun",
				keterangan: "Bihun Goreng / Kuah",
				harga: 15000,
			},
			{
				id: "kwetiau-goreng-kuah",
				nama: "Kwetiau",
				keterangan: "Kwetiau Goreng / Kuah",
				harga: 15000,
			},
			{
				id: "soto-ayam",
				nama: "Soto Ayam",
				keterangan: "Kuah bening, ayam suwir, nasi",
				harga: 15000,
			},
			{
				id: "cap-cay",
				nama: "Cap Cay",
				keterangan: "Aneka sayur, ayam, bakso",
				harga: 15000,
			},
		],
	},
	// Lauk yang bisa ditambah di luar menu utama.
	{
		nama: "Lauk Tambahan",
		item: [
			{
				id: "tempe-tahu",
				nama: "Tempe / Tahu",
				keterangan: "Tempe tipis / tahu lembut",
				harga: 2000,
			},
			{
				id: "sate-kulit-ayam",
				nama: "Sate Kulit Ayam",
				keterangan: "",
				harga: 3000,
			},
			{
				id: "sate-ati-ampela-ayam",
				nama: "Sate Ati Ampela Ayam",
				keterangan: "",
				harga: 5000,
			},
			{
				id: "kepala-bebek",
				nama: "Kepala Bebek",
				keterangan: "",
				harga: 7000,
			},
			{
				id: "nasi-putih-uduk",
				nama: "Nasi",
				keterangan: "Nasi Putih / Uduk",
				harga: 5000,
			},
		],
	},
	// Minuman yang dijual bersama makanan.
	{
		nama: "Minuman",
		item: [
			{
				id: "teh-manis",
				nama: "Teh Manis",
				keterangan: "Teh Manis (hangat / es)",
				harga: 5000,
			},
			{
				id: "kopi-hangat",
				nama: "Kopi Hangat",
				keterangan: "",
				harga: 5000,
			},
			{
				id: "jeruk",
				nama: "Jeruk",
				keterangan: "Jeruk (hangat / es)",
				harga: 5000,
			},
		],
	},
];

// Mencari satu menu berdasarkan id. Mengembalikan null jika tidak ketemu.
export function cariMenu(id) {
	for (const kelompok of kelompokMenu) {
		// Mencari item di dalam satu kategori.
		const ditemukan = kelompok.item.find((item) => item.id === id);
		if (ditemukan) return ditemukan;
	}
	return null;
}

// Kunci localStorage untuk kategori, menu, dan pesanan.
export const KUNCI_DATA = "warung-wong-deso-admin";
// Nama kategori diambil dari kelompok menu bawaan.
export const kategoriAwal = kelompokMenu.map((kelompok) => kelompok.nama);

// Meratakan menu bawaan menjadi satu daftar beserta nama kategorinya.
export function menuAwal() {
	return kelompokMenu.flatMap((kelompok) =>
		kelompok.item.map((item) => ({
			id: item.id,
			nama: item.nama,
			keterangan: item.keterangan,
			harga: item.harga,
			// Kategori disalin dari nama kelompok, bukan dari item.
			kategori: kelompok.nama,
		})),
	);
}

// Menyeragamkan field menu. Harga yang tidak valid menjadi 0.
function normalisasiItem(item) {
	return {
		id: item.id,
		// Nama dan kategori dibersihkan dari spasi.
		nama: String(item.nama || "").trim(),
		kategori: String(item.kategori || "").trim(),
		harga: Number(item.harga) || 0,
		// Data lama memakai field deskripsi, jadi keduanya diterima.
		keterangan: String(item.keterangan ?? item.deskripsi ?? ""),
	};
}

// Menggabungkan kategori tersimpan dengan kategori di menu tanpa duplikat.
function susunKategori(menu, tersimpan) {
	// Memakai daftar tersimpan jika bentuknya array, selain itu memakai bawaan.
	const dasar = Array.isArray(tersimpan)
		? tersimpan.map((nama) => String(nama).trim()).filter(Boolean)
		: [...kategoriAwal];
	const unik = [];

	// Urutan dasar dipertahankan, lalu kategori dari menu ditambahkan di belakang.
	for (const nama of [...dasar, ...menu.map((item) => item.kategori)]) {
		if (!nama) continue;
		// Perbandingan tidak membedakan huruf besar dan kecil.
		if (unik.some((ada) => ada.toLowerCase() === nama.toLowerCase())) continue;
		unik.push(nama);
	}

	// Selalu menyisakan minimal satu kategori.
	return unik.length ? unik : ["Menu Utama"];
}

// Membaca data warung dari localStorage. Data kosong atau rusak memakai data awal.
export function bacaDataWarung() {
	// Cadangan dipakai saat penyimpanan kosong, rusak, atau di luar browser.
	const cadangan = {
		kategori: [...kategoriAwal],
		menu: menuAwal(),
		orders: [],
	};
	if (typeof window === "undefined") return cadangan;

	try {
		const mentah = window.localStorage.getItem(KUNCI_DATA);
		if (!mentah) return cadangan;

		const parsed = JSON.parse(mentah);
		// Field yang bukan array diganti dengan nilai kosong.
		const orders = Array.isArray(parsed.orders) ? parsed.orders : [];
		const menuTersimpan = Array.isArray(parsed.menu) ? parsed.menu : [];
		// Data baru menyimpan daftar kategori. Data lama hanya menyimpan menu.
		const punyaKatalog = Array.isArray(parsed.kategori);
		const awal = menuAwal();
		const idAwal = new Set(awal.map((item) => String(item.id)));
		const menu = punyaKatalog
			// Katalog lengkap: pakai menu tersimpan dan buang item tanpa nama.
			? menuTersimpan.map(normalisasiItem).filter((item) => item.nama)
			// Data lama: menu bawaan tetap ada, item tambahan yang id-nya baru ikut masuk.
			: [
					...awal,
					...menuTersimpan
						.map(normalisasiItem)
						.filter((item) => item.nama && !idAwal.has(String(item.id))),
				];

		return {
			kategori: susunKategori(menu, punyaKatalog ? parsed.kategori : null),
			menu,
			orders,
		};
	} catch {
		return cadangan;
	}
}

// Menyimpan kategori, menu, dan pesanan agar tetap ada setelah refresh.
export function simpanDataWarung(data) {
	if (typeof window === "undefined") return;
	// Hanya tiga field ini yang ditulis, agar data lain tidak ikut tersimpan.
	window.localStorage.setItem(
		KUNCI_DATA,
		JSON.stringify({
			kategori: data.kategori,
			menu: data.menu,
			orders: data.orders,
		}),
	);
}

// Menambah pesanan baru dengan id WD-waktu dan status Menunggu.
export function tambahPesanan(pelanggan, pesanan) {
	// Membaca data terbaru agar pesanan lama tidak tertimpa.
	const data = bacaDataWarung();
	const order = {
		id: `WD-${Date.now()}`,
		nama: pelanggan.nama,
		// Daftar menu diringkas menjadi satu teks, misalnya "Ayam Bakar x2".
		menu: pesanan.map((item) => `${item.nama} x${item.jumlah}`).join(", "),
		total: pesanan.reduce((jumlah, item) => jumlah + item.harga * item.jumlah, 0),
		status: "Menunggu",
	};

	simpanDataWarung({
		...data,
		orders: [...data.orders, order],
	});
}

