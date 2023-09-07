import "./And2CategoriesRowFrame.css";
const And2CategoriesRowFrame = () => {
  return (
    <div className="and2categoriesrowframe">
      <div className="categoryframe1">
        <a className="categorythumbnailnametext1">Kompiuteriai</a>
        <div className="subcategoriesframe1">
          <a className="cat1subnametext1">Nešiojami kompiuteriai</a>
          <a className="cat1subnametext2">Stacionarūs kompiuteriai</a>
          <a className="cat1subnametext2">Serveriai</a>
          <a className="cat1subnametext2">Planšetiniai kompiuteriai</a>
          <a className="cat1subnametext2">Žaidimų kompiuteriai</a>
          <a className="cat1subnametext2">Elektroninės skaityklės</a>
          <a className="cat1subnametext2">Kita</a>
        </div>
      </div>
      <div className="categoryframe1">
        <a className="categorythumbnailnametext1">Išoriniai įrenginiai</a>
        <div className="subcategoriesframe1">
          <a className="cat1subnametext1">Monitoriai</a>
          <a className="cat1subnametext2">
            Projektoriai, skeneriai ir spausdintuvai
          </a>
          <a className="cat1subnametext2">Ausinės ir garso kolonėlės</a>
          <a className="cat1subnametext2">Daugiafunkciniai įrenginiai</a>
          <a className="cat1subnametext2">Klaviatūros, pelės ir Web kameros</a>
          <a className="cat1subnametext2">Žaidimų priedai</a>
          <a className="cat1subnametext2">Kita</a>
        </div>
      </div>
    </div>
  );
};

export default And2CategoriesRowFrame;
