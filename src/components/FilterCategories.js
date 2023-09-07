import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import "./FilterCategories.css";
const FilterCategories = () => {
  return (
    <div className="filtercategories">
      <button className="townselectionframe">
        <b className="townselectionnametext">Miestas</b>
      </button>
      <FormControl sx={{ width: 89 }} variant="standard">
        <InputLabel color="primary">Kategorija</InputLabel>
        <Select color="primary" size="small" label="Kategorija">
          <MenuItem value="--">--</MenuItem>
          <MenuItem value="Kompiuteriai">Kompiuteriai</MenuItem>
          <MenuItem value="Išoriniai įrenginiai">Išoriniai įrenginiai</MenuItem>
          <MenuItem value="Kompiuterių komponentai">
            Kompiuterių komponentai
          </MenuItem>
          <MenuItem value="Priedai ir Aksesuarai">
            Priedai ir Aksesuarai
          </MenuItem>
          <MenuItem value="Programinė įranga ir žaidimai">
            Programinė įranga ir žaidimai
          </MenuItem>
          <MenuItem value="Tinklo įranga">Tinklo įranga</MenuItem>
          <MenuItem value="Paslaugos ir remontas">
            Paslaugos ir remontas
          </MenuItem>
          <MenuItem value="Konsolės">Konsolės</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default FilterCategories;
