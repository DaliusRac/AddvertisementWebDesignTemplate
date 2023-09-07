import "./FooterFrame.css";
const FooterFrame = () => {
  return (
    <footer className="footerframe">
      <div className="footerhelpinfoframe">
        <div className="footerhelpinfonametext">
          NE!Skelbiu.lt pagalba: +3706******0
        </div>
      </div>
      <div className="footerworkhoursinfoframe">
        <div className="footerhelpinfonametext">
          Darbo laikas: I-V 08:20 - 17:00
        </div>
      </div>
      <div className="footermenuframe">
        <a className="faqnametext">D.U.K</a>
        <a className="faqnametext">Naudojimo taisyklės</a>
        <a className="faqnametext">Privatumo politika</a>
        <a className="faqnametext">Kontaktai</a>
        <a className="faqnametext">Svetainės struktūra</a>
      </div>
    </footer>
  );
};

export default FooterFrame;
