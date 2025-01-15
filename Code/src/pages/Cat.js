import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import OpenRecipe from '../utilities/OpenRecipe';

const CatPage = ({category_name})=>{
    const [recipes, setRecipes] = useState({
        0: ['', '', ''],
        1: ['', '', ''],
        2: ['', '', ''],
        3: ['', '', ''],
        4: ['', '', ''],
        5: ['', '', ''],
        6: ['', '', ''],
        7: ['', '', ''],
        8: ['', '', ''],
        9: ['', '', ''],
      });
      
    useEffect(() => {
        fetch(`http://localhost:3001/category_data/${category_name}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.recipes && Array.isArray(data.recipes)) {
            setRecipes({
                0: [data.recipes[0]?.name, data.recipes[0]?.image || '', data.recipes[0]?._id],
                1: [data.recipes[1]?.name, data.recipes[1]?.image || '', data.recipes[1]?._id],
                2: [data.recipes[2]?.name, data.recipes[2]?.image || '', data.recipes[2]?._id],
                3: [data.recipes[3]?.name, data.recipes[3]?.image || '', data.recipes[3]?._id],
                4: [data.recipes[4]?.name, data.recipes[4]?.image || '', data.recipes[4]?._id],
                5: [data.recipes[5]?.name, data.recipes[5]?.image || '', data.recipes[5]?._id],
                6: [data.recipes[6]?.name, data.recipes[6]?.image || '', data.recipes[6]?._id],
                7: [data.recipes[7]?.name, data.recipes[7]?.image || '', data.recipes[7]?._id],
                8: [data.recipes[8]?.name, data.recipes[8]?.image || '', data.recipes[8]?._id],
                9: [data.recipes[9]?.name, data.recipes[9]?.image || '', data.recipes[9]?._id],
            });
            } else {
            console.error('Invalid or missing data.recipes:', data);
            }
        })
        .catch((error) => console.error('Error fetching recipes:', error));
    }, [category_name]);
    
    return(
        <>
        <Navigation/>
            <section className="pb-4 pt-4 recent_container" style={{ backgroundColor: 'white' }}>
                <div className="d-flex mb-2 align-items-center">
                    <h2 style={{ color: '#d72324' }}>{category_name}</h2>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {Object.keys(recipes).map((key, index) => (
                        <Link to={`/recipe/${String(recipes[key][2])}`} className="col text-center category_link" key={index}>
                            <OpenRecipe key={index} recipeId={recipes[key][2]} imageElement={
                            <div className="category_img category_img--large shadow">
                                <img src={`${recipes[key][1]}`} alt="" loading="lazy" />
                            </div>}
                            />
                        <div className="pt-1">{recipes[key][0]}</div>
                        </Link>
                ))}
        </div>
      </section>
      <Footer/>
        </>
    )
};

export default CatPage;