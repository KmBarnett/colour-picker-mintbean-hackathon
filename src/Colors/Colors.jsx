import React from "react";

export default function Colors({ hex, complement }) {
  return (
    <div style={{ backgroundColor: hex, color: complement }} className="color">
      <div className="hex-value">{hex}</div>
    </div>
  );
}
