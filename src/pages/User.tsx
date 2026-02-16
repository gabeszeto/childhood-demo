import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./user.css";
import { toast } from "react-hot-toast";

type Mode = "text" | "image" | "audio";

export default function User() {
    const navigate = useNavigate();
    const [mode, setMode] = useState<Mode>("text");
    const [fileName, setFileName] = useState("");

    return (
        <section className="user-page">
            <div className="user-card">
                <textarea
                    className="user-textarea"
                    placeholder="Write something..."
                />

                {/* MODE SWITCH */}
                <div className="user-modes">
                    <button
                        className={`mode-btn ${mode === "text" ? "active" : ""}`}
                        onClick={() => setMode("text")}
                    >
                        text
                    </button>
                    <button
                        className={`mode-btn ${mode === "image" ? "active" : ""}`}
                        onClick={() => setMode("image")}
                    >
                        image
                    </button>
                    <button
                        className={`mode-btn ${mode === "audio" ? "active" : ""}`}
                        onClick={() => setMode("audio")}
                    >
                        audio
                    </button>
                </div>

                {/* CONDITIONAL INPUT */}
                {mode === "image" && (
                    <label className="file-upload">
                        <span className="file-btn">choose image</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                            hidden
                        />
                        <span className="file-name">{fileName || "no file chosen"}</span>
                    </label>
                )}

                {mode === "audio" && (
                    <label className="file-upload">
                        <span className="file-btn">choose audio</span>
                        <input
                            type="file"
                            accept="audio/*"
                            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                            hidden
                        />
                        <span className="file-name">{fileName || "no file chosen"}</span>
                    </label>
                )}


                <button
                    className="user-submit"
                    onClick={() => toast("Submitted to map! (But not really, this is a demo)")}
                >
                    submit to map
                </button>
                <button
                    className="user-back"
                    onClick={() => navigate("/dashboard")}
                >
                    back
                </button>
            </div>
        </section>
    );
}
