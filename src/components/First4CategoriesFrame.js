import And2CategoriesRowFrame from "./And2CategoriesRowFrame";
import And4CategoriesRowFrame from "./And4CategoriesRowFrame";
import "./First4CategoriesFrame.css";
const First4CategoriesFrame = () => {
  return (
    <div className="first4categoriesframe">
      <And2CategoriesRowFrame />
      <And4CategoriesRowFrame />
    </div>
  );
};

export default First4CategoriesFrame;
