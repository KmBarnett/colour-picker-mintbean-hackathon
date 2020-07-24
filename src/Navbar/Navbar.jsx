import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import './Navbar.css'

export default function Settings({
  changeVariation,
  changeBrightness,
  changeSaturation,
  brightness,
  saturation
}) {
  
  const handleVariationChange = (variation) => {
    changeVariation(variation);
  };

  const changeSettings = (e) => {
    const settingAmount = e.target.name;
    

    switch (settingAmount) {
      case "brighten":
        changeBrightness(brightness + 10);
        break;
      case "darken":
        changeBrightness(brightness - 10);
        break;
      case "desaturate":
        changeSaturation(saturation - 10);
        break;
      case "saturate":
        changeSaturation(saturation + 10);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>Color Palette Generator</Navbar.Brand>
            <NavDropdown
              onSelect={(e) => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link
              value={"brighten"}
              name={"brighten"}
              onClick={(e) => changeSettings(e)}
            >
              Brighten
            </Nav.Link>
            <Nav.Link
              value={"brighten"}
              name={"darken"}
              onClick={(e) => changeSettings(e)}
            >
              Darken
            </Nav.Link>
            <Nav.Link
              value={"saturate"}
              name={"desaturate"}
              onClick={(e) => changeSettings(e)}
            >
              Desaturate
            </Nav.Link>
            <Nav.Link
              value={"saturate"}
              name={"saturate"}
              onClick={(e) => changeSettings(e)}
            >
              Saturate
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  );
}
