export function formatRupiah(nilai) {
	return `Rp ${nilai.toLocaleString("id-ID")}`;
}

export const kelompokMenu = [
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

export function cariMenu(id) {
	for (const kelompok of kelompokMenu) {
		const ditemukan = kelompok.item.find((item) => item.id === id);
		if (ditemukan) return ditemukan;
	}
	return null;
}

export const KUNCI_DATA = "warung-wong-deso-admin";
export const kategoriAwal = kelompokMenu.map((kelompok) => kelompok.nama);

export function menuAwal() {
	return kelompokMenu.flatMap((kelompok) =>
		kelompok.item.map((item) => ({
			id: item.id,
			nama: item.nama,
			keterangan: item.keterangan,
			harga: item.harga,
			kategori: kelompok.nama,
		})),
	);
}

function normalisasiItem(item) {
	return {
		id: item.id,
		nama: String(item.nama || "").trim(),
		kategori: String(item.kategori || "").trim(),
		harga: Number(item.harga) || 0,
		keterangan: String(item.keterangan ?? item.deskripsi ?? ""),
	};
}

function susunKategori(menu, tersimpan) {
	const dasar = Array.isArray(tersimpan)
		? tersimpan.map((nama) => String(nama).trim()).filter(Boolean)
		: [...kategoriAwal];
	const unik = [];

	for (const nama of [...dasar, ...menu.map((item) => item.kategori)]) {
		if (!nama) continue;
		if (unik.some((ada) => ada.toLowerCase() === nama.toLowerCase())) continue;
		unik.push(nama);
	}

	return unik.length ? unik : ["Menu Utama"];
}

export function bacaDataWarung() {
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
		const orders = Array.isArray(parsed.orders) ? parsed.orders : [];
		const menuTersimpan = Array.isArray(parsed.menu) ? parsed.menu : [];
		const punyaKatalog = Array.isArray(parsed.kategori);
		const awal = menuAwal();
		const idAwal = new Set(awal.map((item) => String(item.id)));
		const menu = punyaKatalog
			? menuTersimpan.map(normalisasiItem).filter((item) => item.nama)
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

export function simpanDataWarung(data) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(
		KUNCI_DATA,
		JSON.stringify({
			kategori: data.kategori,
			menu: data.menu,
			orders: data.orders,
		}),
	);
}

export function tambahPesanan(pelanggan, pesanan) {
	const data = bacaDataWarung();
	const order = {
		id: `WD-${Date.now()}`,
		nama: pelanggan.nama,
		menu: pesanan.map((item) => `${item.nama} x${item.jumlah}`).join(", "),
		total: pesanan.reduce((jumlah, item) => jumlah + item.harga * item.jumlah, 0),
		status: "Menunggu",
	};

	simpanDataWarung({
		...data,
		orders: [...data.orders, order],
	});
}

