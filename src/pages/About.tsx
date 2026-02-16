import { useNavigate } from "react-router-dom";
import "./about.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-page">
      <div className="about-card">
        <h2 className="about-title">about</h2>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button
          className="about-button"
          onClick={() => navigate("/dashboard")}
        >
          nice
        </button>
      </div>
    </section>
  );
}
