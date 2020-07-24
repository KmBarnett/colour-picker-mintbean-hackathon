import React, { useState, useEffect } from "react";
import "./App.css";
import Palette from "../Palette/Palette";
import Settings from "../Navbar/Navbar.jsx";
import tinycolor from "tinycolor2";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [brightness, changeBrightness] = useState(0);
  const [saturation, changeSaturation] = useState(0);

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeBrightness(0);
    changeSaturation(0);
    changeHex(randomColor);
  };

  const handleSpace = (e) => {
    const isLink = e.target.classList.contains("nav-link");
    const isSpace = e.keyCode === 32;

    if (isSpace && !isLink) {
      setRandom();
    }
  };

  useEffect(() => {
    document.querySelector("body").addEventListener("keyup", handleSpace);
    // eslint-disable-next-line
  }, []);
 

  return (
    <main className="App">
      <Settings
        changeVariation={changeVariation}
        changeHex={changeHex}
        changeBrightness={changeBrightness}
        changeSaturation={changeSaturation}
        setRandom={setRandom}
        brightness={brightness}
        saturation={saturation}
      />
      <Palette
        brightness={brightness}
        saturation={saturation}
        variation={variation}
        setRandom={setRandom}
        hex={hex}
      />
    </main>
  );
}

export default App;
