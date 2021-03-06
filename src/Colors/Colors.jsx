import React, {useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

export default function Colors({ hex, complement }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(setCopied, 1000, false);
  } 


  return (
    <CopyToClipboard onCopy={handleCopy} text={hex}>
      <div
        style={{ backgroundColor: hex, color: complement }}
        className="color"
        data-tip="Click to Copy"
      >
        <ReactTooltip className='tooltip' />
        <div style={{ color: complement }} className="hex-value">
          <p className={`copied-${copied} copied`}>Copied</p>
          <button style={{ color: complement }} className="hex-copy">
            {hex}
          </button>
        </div>
      </div>
    </CopyToClipboard>
  );
}
