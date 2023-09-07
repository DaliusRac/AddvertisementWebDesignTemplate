import { useEffect } from "react";
import "./DrawerMenu.css";
const DrawerMenu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="drawer-menu" data-animate-on-scroll>
      <a className="drawerloginbuttonframe">
        <b className="prisijungti">Prisijungti</b>
      </a>
      <a className="drawerregbuttonframe">
        <b className="prisijungti">Registracija</b>
      </a>
      <a className="drawerregbuttonframe">
        <b className="prisijungti">Naujas skelbimas</b>
      </a>
      <a className="drawerregbuttonframe">
        <b className="prisijungti">Patikę skelbimai</b>
      </a>
      <a className="drawerhistorybuttonframe">
        <b className="prisijungti">Istorija</b>
      </a>
      <a className="drawerhistorybuttonframe">
        <b className="prisijungti">Kalba</b>
      </a>
    </div>
  );
};

export default DrawerMenu;
