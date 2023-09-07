import { useState, useCallback } from "react";
import DrawerMenu from "./DrawerMenu";
import PortalDrawer from "./PortalDrawer";
import "./HomeAndSearchFrame.css";
const HomeAndSearchFrame = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className="homeandsearchframe">
        <div className="homeandsearchbox">
          <a className="homebutton">
            <img
              className="home-4-home-house-roof-shelte-icon"
              alt=""
              src="/home4homehouseroofshelter.svg"
            />
            <i className="homebuttontext">Ne!Skelbiu</i>
          </a>
          <button className="drawermenu-button" onClick={openDrawerMenu}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </button>
          <div className="search">
            <input className="searchinput" type="text" />
            <a className="searchbutton">
              <img
                className="magnifying-glass-glass-search-icon"
                alt=""
                src="/magnifyingglassglasssearchmagnifying.svg"
              />
            </a>
          </div>
        </div>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HomeAndSearchFrame;
