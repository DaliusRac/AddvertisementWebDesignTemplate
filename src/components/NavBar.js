import HomeAndSearchFrame from "./HomeAndSearchFrame";
import FilterCategories from "./FilterCategories";
import MenuItems from "./MenuItems";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <HomeAndSearchFrame />
      <FilterCategories />
      <MenuItems />
    </div>
  );
};

export default NavBar;
