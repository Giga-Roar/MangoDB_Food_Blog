import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenRecipe = ({ recipeId, imageElement }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked ", recipeId)
    navigate(`/recipe/${recipeId}`, {replace : true});
  };

  return (
    <div onClick={handleClick}>
      {/* Pass the image element directly */}
      {imageElement}
    </div>
  );
};

export default OpenRecipe;