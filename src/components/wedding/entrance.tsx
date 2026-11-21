import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import curtain from "@/assets/curtain.jpg.asset.json";
import entrance from "@/assets/entrance.mp4.asset.json";
import { Ornament } from "./ornament";

export function Entrance({ onOpen, onComplete }: { onOpen: () => void; onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [failed, setFailed] = useState(false);
  function finish() { setFinished(true); onComplete(); }
  async function open() {
    onOpen();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { finish(); return; }
    setPlaying(true);
    try { await videoRef.current?.play(); } catch { setFailed(true); }
  }
  return <div className={`entrance ${playing ? "is-playing" : ""} ${finished ? "is-finished" : ""}`} aria-label="Wedding invitation entrance" aria-hidden={finished}>
    <img className="entrance-image" src={curtain.url} alt="Green silk curtains framed by jasmine garlands, banana leaves and brass lamps" />
    <video className="entrance-video" ref={videoRef} src={entrance.url} poster={curtain.url} playsInline muted preload="auto" onEnded={finish} onError={() => setFailed(true)} />
    <div className="entrance-top">॥ శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు ॥</div>
    <div className="entrance-copy">
      <div className="monogram">A<span className="sr-only"> and </span>♡S</div>
      <p className="eyebrow">With love, we invite you to celebrate</p>
      <h1>Akshay <em>♡</em> Sandhya</h1>
      <Ornament />
      <p className="invitation-date">4 December 2026 · Narayanapet</p>
      <Button variant="ceremony" onClick={open}>Open Invitation <ArrowRight /></Button>
      <p className="small-note">Two hearts. One beautiful beginning.</p>
    </div>
    <div className="entrance-footer">A CELEBRATION OF LOVE, FAMILY & TRADITION</div>
    {playing && <Button className="opening-fallback" variant="ceremony" onClick={finish}>{failed ? "Enter invitation" : "Skip entrance"}</Button>}
  </div>;
}
