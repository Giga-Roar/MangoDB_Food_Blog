import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from './pages/Categories';
import DevTeam from "./pages/DevTeam";
import SubmitRecipe from './pages/Submit';
import { cat } from 'fontawesome';
import CatPage from './pages/Cat'
import RecipePage from './pages/Recipe'

const categories_list = [
              'Rice',
              'Gravy',
              'Dry',
              'Tandoor',
              'Chinese',
              'Snacks',
              'Regional',
              'Sweets',
              'Juice'
          ];



function App() {
  const cat_code = () => {
    return (
            <>
              {categories_list.map((category, index) => (
                <Route key={index} path={`/category_data/${category}`} element={<CatPage category_name={category} />} />
              ))}
            </>
          );
        };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/devTeam' element={<DevTeam />} />
          <Route path='/submit' element={<SubmitRecipe />}></Route>
          {cat_code()}
          <Route path ='/recipe/:recipe_id' element = {<RecipePage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
