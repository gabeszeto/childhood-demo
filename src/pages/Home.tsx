import { Link } from "react-router-dom";
import "./Home.css";

import toast from "react-hot-toast";

export default function Home() {
    return (
        <div className="home">
            {/* HERO */}
            <section className="hero">
                <h1 className="wordmark">childʼhood</h1>
                <div className="glyph-circle" />
            </section>

            {/* FORM + ACTIONS */}
            <section className="cta">
                <div className="cta-inner">
                    <p className="cta-text">
                        Join us and share your stories in your city
                    </p>

                    <form
                        className="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            toast("Sending stickers");
                        }}
                    >            <input placeholder="First name" />
                        <input placeholder="Last name" />
                        <input placeholder="Address" />
                        <input placeholder="Email" />
                        <input placeholder="Phone number" />

                        <button type="submit" className="btn">
                            send me stickers
                        </button>
                    </form>

                    {/* DIVIDER */}
                    <div className="divider">
                        <span>or</span>
                    </div>

                    {/* ACCOUNT BUTTONS */}
                    <div className="button-stack">
                        <Link to="/signin" className="btn link-btn">
                            sign in
                        </Link>
                        <Link to="/create" className="btn link-btn">
                            create account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
