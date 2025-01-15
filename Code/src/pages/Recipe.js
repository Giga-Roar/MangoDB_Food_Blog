import 'bootstrap/dist/css/bootstrap.min.css';
import '../utilities/Recipe.css'
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';

const RecipePage = () => {
  const { recipe_id } = useParams();
  console.log(recipe_id)
  const [recipe, setRecipe] = useState({
    name: '',
    category: '',
    description: '',
    ingredients: [],
    image: '',
    userName: '',
  });

  useEffect(() => {
    fetch(`http://localhost:3001/recipe/${recipe_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch recipe. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const newData = data.recipe;
        console.log(data);
        setRecipe({
          name: newData.name || '',
          category: newData.category || '',
          description: newData.description || '',
          ingredients: newData.ingredients || [],
          image: newData.image || '',
          userName: newData.userName || '',
        });
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, []);

  return (
    <>
      <Navigation />
      <section id='recipe_page'>
        <div className='recipe_img'>
          <img src={recipe.image} />
        </div>
        <div className='recipe_data'>
          <p><span>Recipe : </span> {recipe.name}</p>
          <p><span>Ingredients</span>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul></p>
          <p><span>Preparation : </span> {recipe.description}</p>
          <p><span>Category : </span> {recipe.category}</p>
          <div className='recipe_author'><h3>Recipe by -  {recipe.userName}</h3></div>
        </div>
      </section>
      <Footer />
    </>
  )
};

export default RecipePage;