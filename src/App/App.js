import React, { useState, useEffect } from "react";
import "./App.css";
import Palette from "../Palette/Palette";
import Settings from "../Navbar/Navbar.jsx";
import tinycolor from "tinycolor2";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState("default");
  const [brightness, changeBrightness] = useState(0);
  const [saturation, changeSaturation] = useState(0);

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeSetting("default");
    changeBrightness(0);
    changeSaturation(0);
    changeHex(randomColor);
  };

  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      setRandom();
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", handleSpace);
    // eslint-disable-next-line
  }, []);

  return (
    <main className="App">
      <Settings
        changeSetting={changeSetting}
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
        setting={setting}
        variation={variation}
        hex={hex}
      />
    </main>
  );
}

export default App;
