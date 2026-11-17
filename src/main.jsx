import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

// Memuat Bootstrap dan CSS, lalu merender aplikasi ke elemen #root.
createRoot(document.getElementById("root")).render(
	// StrictMode membantu menemukan efek samping saat pengembangan.
	<StrictMode>
		<App />
	</StrictMode>,
);
