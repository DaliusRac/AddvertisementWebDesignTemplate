import RecentlyAddedandKategoriesFram from "./RecentlyAddedandKategoriesFram";
import Last4CategoriesFrame from "./Last4CategoriesFrame";
import "./CardFullColumnFrame.css";
const CardFullColumnFrame = () => {
  return (
    <div className="cardfullcolumnframe">
      <RecentlyAddedandKategoriesFram />
      <Last4CategoriesFrame />
    </div>
  );
};

export default CardFullColumnFrame;
