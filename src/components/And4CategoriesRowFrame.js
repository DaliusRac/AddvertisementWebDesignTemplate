import "./And4CategoriesRowFrame.css";
const And4CategoriesRowFrame = () => {
  return (
    <div className="and4categoriesrowframe">
      <div className="categoryframe3">
        <a className="categorythumbnailnametext3">Kompiuterių komponentai</a>
        <div className="subcategoriesframe3">
          <a className="cat3subnametext1">Nešiojamiems kompiuteriams</a>
          <a className="cat3subnametext2">Stacionariems kompiuteriams</a>
          <a className="cat3subnametext2">Kita</a>
        </div>
      </div>
      <div className="categoryframe3">
        <a className="categorythumbnailnametext3">Priedai, aksesuarai</a>
        <div className="subcategoriesframe3">
          <a className="cat3subnametext1">
            Įkrovikliai baterijos ir akumuliatoriai
          </a>
          <a className="cat3subnametext2">Adapteriai, kabeliai ir jungtys</a>
          <a className="cat3subnametext2">
            Atminties kortelės ir USB atmintinės
          </a>
          <a className="cat3subnametext2">HDD dėžutės ir išoriniai HDD</a>
          <a className="cat3subnametext2">Krepšiai kompiuteriams</a>
          <a className="cat3subnametext2">UPS (NMŠ)</a>
          <a className="cat3subnametext2">Kita</a>
        </div>
      </div>
    </div>
  );
};

export default And4CategoriesRowFrame;
