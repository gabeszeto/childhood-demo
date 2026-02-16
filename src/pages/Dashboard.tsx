import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <section className="dash-page">
      <div className="dash-phone">
        <h1 className="dash-wordmark">childʼhood</h1>

        <div className="dash-buttons">
          <Link to="/about" className="dash-btn">about</Link>
          <Link to="/user" className="dash-btn">user</Link>
          <Link to="/finder" className="dash-btn">finder</Link>
        </div>
      </div>
    </section>
  );
}
