import "./App.css";
import MainVisual from "./components/MainVisual/MainVisual";
import MainSection from "./components/MainSection/MainSection";

export default function App() {
  return (
    <div className="main-container">
      <MainVisual />
      <MainSection />
    </div>
  );
}
