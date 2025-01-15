import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

function SubmitRecipe() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    category: '',
    name: '',
    description: '',
    ingredients: [''],
    image: null,
  });

  const handleAddIngredient = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: [...prevFormData.ingredients, ''],
    }));
  };

  const handleIngredientChange = (index, value) => {
    setFormData((prevFormData) => {
      const newIngredients = [...prevFormData.ingredients];
      newIngredients[index] = value;
      return {
        ...prevFormData,
        ingredients: newIngredients,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file, update the 'image' property in formData
    if (type === 'file') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: files[0], // Use the first file if multiple are selected
      }));
    } else {
      // For other inputs, update the corresponding property in formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert the ingredients array into a string format
      const ingredientsString = JSON.stringify(formData.ingredients);

      // Create a form data object to submit
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('userName', formData.userName)
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('ingredients', ingredientsString);
      formDataToSubmit.append('image', formData.image);

      // Send a POST request to the Express server
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();
      console.log(result); // Handle the response as needed

      setFormData({
        userName: '',
        email: '',
        category: '',
        name: '',
        description: '',
        ingredients: [''],
        image: null,
      });
      alert('Recipe published successfully!, redirecting to main page...');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="row justify-content-center form_container" style={{ marginLeft: '115px' }}>
        <div className="col-8">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="userName" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="form-control"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="category">Select Category</label>
                <select
                  name="category"
                  id="category"
                  className="form-select form-control"
                  aria-label="Category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Rice">Rice</option>
                  <option value="Gravy">Gravy</option>
                  <option value="Dry">Dry</option>
                  <option value="Tandoor">Tandoor</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Regional">Regional</option>
                  <option value="Sweets">Sweets</option>
                  <option value="Juice">Juice</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Recipe Title
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Preparation
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  cols="30"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12">
                <label htmlFor="ingredients" className="form-label">
                  Ingredients
                </label>
                <div className="ingredient-list">
                  {formData.ingredients.map((ingredient, index) => (
                    <div className="ingredient-div mb-1" key={index}>
                      <input
                        type="text"
                        name="ingredients"
                        className="form-control ingredient_input"
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12">
                <button type="button" className="btn btn-outline-primary" onClick={handleAddIngredient}>
                  + Ingredient
                </button>
              </div>

              <div className="col-12">
                <label htmlFor="image">Image</label>
                <input type="file" name="image" accept="image/*" onChange={handleChange} />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Publish Recipe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitRecipe;
