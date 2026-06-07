import "./loader.css";
import logo from "@/assets/logo/2507311620286908.webp";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <img src={logo} alt="HexxonGlobal" className="loader-logo" />

        <h1 className="loader-title">HexxonGlobal</h1>

        <p className="loader-subtitle">
          Global Export Solutions
        </p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}