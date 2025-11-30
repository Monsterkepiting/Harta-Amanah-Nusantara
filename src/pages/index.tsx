import WalletButton from "../components/WalletButton";
import MapLibreMap from "../components/MapLibreMap";

export default function Home() {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px", backgroundColor: "#1a1a1a", color: "white" }}>
        <h1>Harta Amanah Nusantara</h1>
        <WalletButton />
      </header>
      <main style={{ padding: "24px" }}>
        <MapLibreMap />
      </main>
    </div>
  );
}
