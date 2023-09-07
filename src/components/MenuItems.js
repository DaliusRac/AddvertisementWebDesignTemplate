import { useState, useRef, useCallback } from "react";
import LanguageDropboxFrame from "./LanguageDropboxFrame";
import PortalPopup from "./PortalPopup";
import "./MenuItems.css";
const MenuItems = () => {
  const languageButtonRef = useRef(null);
  const [isLanguageDropboxFramePopupOpen, setLanguageDropboxFramePopupOpen] =
    useState(false);

  const openLanguageDropboxFramePopup = useCallback(() => {
    setLanguageDropboxFramePopupOpen(true);
  }, []);

  const closeLanguageDropboxFramePopup = useCallback(() => {
    setLanguageDropboxFramePopupOpen(false);
  }, []);

  return (
    <>
      <div className="menuitems">
        <div className="favoritesandhistoyframe">
          <a className="favoritesbutton">
            <img className="favoritesicon" alt="" src="/favoritesicon.svg" />
          </a>
          <a className="favoritesbutton">
            <img className="historyicon" alt="" src="/historyicon.svg" />
          </a>
        </div>
        <div className="loginregaddframe">
          <a className="addnewaddbutton1">
            <b className="addnewaddbuttonnametext1">Naujas skelbimas</b>
          </a>
          <a className="loginbutton2">
            <b className="addnewaddbuttonnametext1">Prisijungti</b>
          </a>
          <a className="regbutton1">
            <b className="addnewaddbuttonnametext1">Registracija</b>
          </a>
        </div>
        <button
          className="languagebutton"
          ref={languageButtonRef}
          onClick={openLanguageDropboxFramePopup}
        >
          <img className="languageicon" alt="" src="/languageicon.svg" />
        </button>
      </div>
      {isLanguageDropboxFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={languageButtonRef}
          onOutsideClick={closeLanguageDropboxFramePopup}
        >
          <LanguageDropboxFrame onClose={closeLanguageDropboxFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MenuItems;
