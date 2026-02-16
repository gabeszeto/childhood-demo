import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./finder.css";

export default function Finder() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="finder-page">
      <div className="finder-card">
        <p className="finder-text">
          Used to stand here for hours with #Sly just waiting for a sight of
          Adam Ant. Young Love 1983
        </p>

        {/* HIDDEN AUDIO */}
        <audio ref={audioRef} src="/audio/demo.mp3" />

        {/* AUDIO BAR */}
        <div className="audio-bar">
          <button
            className="play-btn"
            onClick={toggleAudio}
            aria-label="play audio"
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <div className={`wave ${playing ? "wave-active" : ""}`}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <button
          className="finder-back"
          onClick={() => navigate("/dashboard")}
        >
          back
        </button>
      </div>
    </section>
  );
}
