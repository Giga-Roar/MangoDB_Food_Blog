import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import OpenRecipe from '../utilities/OpenRecipe';

function Home() {
  const [latest, setLatest] = useState({
    0: ['', ''],
    1: ['', ''],
    2: ['', ''],
    3: ['', ''],
    4: ['', ''],
  });

  useEffect(() => {
    // Fetch the 5 latest recipes when the component mounts
    fetch('http://localhost:3001/latest')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
  
        // Update the state with the fetched latest recipes
        setLatest({
          0: [data.latestRecipes[0]?.name, data.latestRecipes[0]?.image || '', data.latestRecipes[0]?._id || ''],
          1: [data.latestRecipes[1]?.name, data.latestRecipes[1]?.image || '', data.latestRecipes[1]?._id || ''],
          2: [data.latestRecipes[2]?.name, data.latestRecipes[2]?.image || '', data.latestRecipes[2]?._id || ''],
          3: [data.latestRecipes[3]?.name, data.latestRecipes[3]?.image || '', data.latestRecipes[3]?._id || ''],
          4: [data.latestRecipes[4]?.name, data.latestRecipes[4]?.image || '', data.latestRecipes[4]?._id || ''],
        });
      })
      .catch((error) => console.error('Error fetching latest recipes:', error));
  }, []); 
  return (
    <>
      <Navigation />
      {/* HomePage Main */}
      <div id="homepage_main" className="container-fluid">
        <br />
        <div className="thoughts">
          <p className="hero_thought">
            <sup>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </sup>{' '}
            There is no sincerer love than the love of food.
            <sup>
              <FontAwesomeIcon icon={faQuoteRight} />
            </sup>
            <br />
            <span>- George Bernard Shaw</span>
          </p>
          <p className="hero_thought">
            <sup>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </sup>{' '}
            No one is born a great cook, one learns by doing.
            <sup>
              <FontAwesomeIcon icon={faQuoteRight} />
            </sup>
            <br />
            <span>- Julia Child</span>
          </p>
        </div>
        <div className="hero_para">
          <p>
            Food is the most under-rated thing in this world. A person can be truly satisfied, only through food.
            <br />
            Not only eating, but also cooking food is a talent which cannot be achieved easily. So, to all the foodies
            there are, this is the place where you can master the art of cooking. <br />
            This website provides you with a wide range of Indian Cuisine with different categories such as Rice, Gravy,
            Starters & Snacks to list a few and many more. <br />
            <br />
            <span>Feel Free to explore the website, explore the variety of recipes shared by our users & share your
              recipes.</span>
          </p>
          <button className="hero_explore">
            <Link to="/categories" target="_self" style={{ color: 'antiquewhite', textDecoration: 'none' }}>
              Explore Categories
            </Link>
          </button>
        </div>
      </div>

      {/* Home Additional */}
      <section className="pb-4 pt-4 recent_container" style={{ backgroundColor: 'white' }}>
        <div className="d-flex mb-2 align-items-center">
          <h2 style={{ color: '#d72324' }}>Recently Uploaded</h2>
        </div>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {Object.keys(latest).map((key, index) => (
            
            <Link to={`/recipe/${String(latest[key][2])}`} className="col text-center category_link" key={index}>
            <div className="category_img category_img--large shadow">
                <img src={`${latest[key][1]}`} alt="" loading="lazy" />
              </div>
              <div className="pt-1">{latest[key][0]}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Submit recipes */}
      <section
        className="px-4 py-5 my-5 text-center submit_section"
        style={{ background: 'rgba(249, 255, 33, 0.7)' }}
      >
        <h1 className="display-5 fw-bold">Publish your recipe for FREE today</h1>
        <p className="submit_intro mb-4">
          We invite all passionate home cooks and aspiring chefs to be a part of our culinary community. Your unique
          recipes can inspire others and bring flavors from around the world to kitchens everywhere. Whether it's a
          cherished family recipe passed down through generations or a creative twist on a classic dish, we welcome your
          culinary masterpieces. Share the joy of cooking by submitting your recipes and let your creativity shine. Your
          recipes could become a part of our diverse collection, delighting food enthusiasts and home cooks alike. Join us
          in celebrating the art of cooking and let the world taste your delicious creations! Submit your recipes today and
          be a part of our flavorful journey.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/submit" className="btn btn-primary btn-dark btn-lg" target="_blank">
            Submit Recipe
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
