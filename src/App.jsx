import Header from "./components/Header";
import Thesis from "./components/Thesis";
import Mechanism from "./components/Mechanism";
import PrivacyInevitability from "./components/PrivacyInevitability";
import Citations from "./components/Citations";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Thesis />
        <Mechanism />
        <PrivacyInevitability />
        <Citations />
      </main>
      <footer className="border-t border-black/5">
        <div className="max-w-5xl mx-auto px-4 py-8 text-xs text-gray-500">
          Built for a focused, citation-driven analysis of platform power dynamics.
        </div>
      </footer>
    </div>
  );
}
