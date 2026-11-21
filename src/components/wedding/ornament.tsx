import { Flower2 } from "lucide-react";

export function Ornament() {
  return <div className="ornament" aria-hidden="true"><Flower2 /></div>;
}

export function DappuIcon() {
  return <svg className="dappu-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><ellipse cx="16" cy="16" rx="10" ry="11" stroke="currentColor" strokeWidth="1.4"/><ellipse cx="16" cy="16" rx="7" ry="8" stroke="currentColor" strokeWidth=".7"/><path d="M7 11l18 10M7 21l18-10M10 5l12 22M10 27L22 5M2 3l7 9M27 2l-3 10" stroke="currentColor" strokeWidth="1.3"/></svg>;
}
