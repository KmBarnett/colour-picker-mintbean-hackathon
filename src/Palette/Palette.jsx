import React from "react";
import Colors from "./../Colors/Colors";
import "./Palette.css";
import uniqid from "uniqid";
import { Button } from "react-bootstrap";

const tinycolor = require("tinycolor2");

export default function Palette({
  hex,
  variation,
  brightness,
  saturation,
  setRandom
}) {
  let colors;

  // Using a switch to set variation type set
  switch (variation) {
    case "tetrad":
      colors = tinycolor(hex).tetrad(5, 5);
      break;
    case "analogous":
      colors = tinycolor(hex).analogous(5, 5);
      break;
    case "monochromatic":
      colors = tinycolor(hex).monochromatic(5, 5);
      break;
    case "splitcomplement":
      colors = tinycolor(hex).splitcomplement();
      break;
    case "triad":
      colors = tinycolor(hex).triad();
      break;
    case "complement":
      colors = tinycolor(hex).complement().toHexString();
      break;
    default:
      return;
  }

  // Using a dictionary object to set setting
  const settings = (color) => {
    return tinycolor(color)
      .brighten(brightness)
      .saturate(saturation)
      .toString();
  };

  let colorPalette;
  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  } else {
    colorPalette = colors.map((t) => {
      let hexColor = t.toHexString();

      hexColor = settings(hexColor);

      let method = tinycolor(hexColor).isDark() ? "brighten" : "darken";

      return (
        <Colors
          key={uniqid()}
          hex={hexColor}
          complement={tinycolor(hexColor)[method](100).toString()}
        />
      );
    });
  }

  let buttonColor = tinycolor
    .mostReadable(hex, ['#000000', '#ffffff'], {
      includeFallbackColors: true,
      level: "AAA",
      size: "small",  
    })
    .toRgbString();


  return (
    <section id="container">
      {colorPalette}
      <Button
        className="random-btn"
        onClick={setRandom}
        variant="primary"
        size="lg"
        block
        style={{ background: buttonColor, color: hex }}
      >
        Random
      </Button>
    </section>
  );
}
