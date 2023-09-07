import NavBar from "../components/NavBar";
import CardFullColumnFrame from "../components/CardFullColumnFrame";
import FooterFrame from "../components/FooterFrame";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <NavBar />
      <CardFullColumnFrame />
      <FooterFrame />
    </div>
  );
};

export default Main;
